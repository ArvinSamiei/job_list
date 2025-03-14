import JobCard from "./JobCard";
import {Container, Row} from "react-bootstrap";


function JobList({jobs}) {
    return (
        <Container className="mt-4">
            <Row className="g-4">
                {jobs.map((job) => (
                    <JobCard key={job.id} job={job}/>
                ))}
            </Row>
        </Container>

)
    ;
}

export default JobList;
