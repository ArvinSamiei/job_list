import {useState, useEffect } from 'react'
import JobList from "../components/JobList";
import {fetchJobs} from "../api/api";
import {useLocation} from "react-router-dom";

function Home() {
    const [jobs, setJobs] = useState([]);
    const [error, setError] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const getData = async () => {
            try {
                const fetchedJobs = await fetchJobs(); // Use the imported function
                // console.log(fetchedJobs)
                setJobs(fetchedJobs)
            } catch (err) {
                setError(err.message);
            }
        };

        getData();
    }, [location]);

    if (error) return <div>Error: {error}</div>;


    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
            {(!jobs || jobs.length == 0)? "No Jobs Listed Yet.": <JobList jobs={jobs} />}
        </div>
    );
}

export default Home;