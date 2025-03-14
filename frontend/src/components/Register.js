import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert, Container, Row, Col, Card } from "react-bootstrap";
import apiClient from "../api/apiClient";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await apiClient.post("/auth/register", 
                { username, email, password }, // ✅ Axios expects this as second argument
                {
                    headers: { "Content-Type": "application/json" },
                }
            );
        
            navigate("/login"); // ✅ Redirect to login after registration
        } catch (err) {
            setError(err.response?.data?.message || "Registration failed");
        }
        
    };

    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <Row>
                <Col md={12}>
                    <Card className="shadow-lg">
                        <Card.Body>
                            <h2 className="text-center mb-4">Register</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleRegister}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                        placeholder="Enter your username"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        placeholder="Enter your email"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        placeholder="Enter your password"
                                    />
                                </Form.Group>

                                <Button variant="success" type="submit" className="w-100">
                                    Register
                                </Button>
                            </Form>
                            <p className="text-center mt-3">
                                Already have an account?{" "}
                                <a href="/login" className="text-primary">
                                    Login
                                </a>
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Register;
