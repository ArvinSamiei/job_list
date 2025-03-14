import {Button, Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

function JobCard({job}) {
    return (
        <Col key={job.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="shadow-sm h-100">
                <Card.Body>
                    <Card.Title>{job.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        {job.company}
                    </Card.Subtitle>
                    <Card.Text>{job.location}</Card.Text>
                    <Link to={`/jobs/${job.id}`}>
                        <Button variant="primary">View Details</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default JobCard;
