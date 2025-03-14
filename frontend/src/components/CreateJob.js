import {useState} from "react";
import {createJob} from "../api/api";
import { Form, Button, Container } from "react-bootstrap";

function CreateJob() {
    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const jobData = {title, company, location, description};

        try {
            await createJob(jobData, localStorage.getItem("token"));
            alert("Job created successfully!");
            setTitle("");
            setCompany("");
            setLocation("");
            setDescription("");
        } catch (error) {
            console.error("Error creating job:", error);
            alert("Failed to create job. Try again!");
        }
    };

    return (
        <Container className="mt-4">
            <h2 className="text-center mb-4">Post a Job</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="jobTitle">
                    <Form.Label>Job Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter job title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="companyName">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter company name"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="jobLocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="jobDescription">
                    <Form.Label>Job Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Enter job description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                    Post Job
                </Button>
            </Form>
        </Container>
    );
}

export default CreateJob;
