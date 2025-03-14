import { useParams, useNavigate } from "react-router-dom";
import {createJob, deleteJobById, fetchJobById} from "../api/api";

import {useState, useEffect} from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

function JobDetails({isUserLoggedIn}) {
    const {id} = useParams();
    const [job, setJob] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchJobById(id);
                setJob(data);
                console.log(isUserLoggedIn)
            } catch (e) {
                setError(e.message)
            }
        }
        getData();
    }, {})

    const deleteJob = async (e) => {
        try{
            await deleteJobById(id, localStorage.getItem("token"));
            alert("Job deleted successfully!");
            navigate("/");
        }
        catch (error){
            console.error("Error creating job:", error);
            alert(error.message);
        }

    }

    if (error) {
        return <div>Error fetching job</div>;
    }
    if (!job){
        return <div>Fetching Data</div>
    }


    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">{job.title}</h1>
            <p className="text-gray-600">{job.company}</p>
            <p className="text-gray-800">{job.location}</p>
            <p className="mt-4">{job.description}</p>
            <Link to={`/`}>
                <Button variant="primary">Back to Job List</Button>
            </Link>
            {isUserLoggedIn && <Link to={`/`}>
                <Button onClick={deleteJob} className={"ms-1"} variant="danger">Delete Job</Button>
            </Link>}

        </div>
    );
}

export default JobDetails;
