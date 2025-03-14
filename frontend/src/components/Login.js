import {useState} from "react";
import {useNavigate} from "react-router-dom";
import { Form, Button, Alert, Container, Row, Col, Card } from "react-bootstrap";
import apiClient from "../api/apiClient";

function Login({setIsUserLoggedIn}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await apiClient.post("/auth/login", 
                { email, password }, // ✅ Pass data as second argument
                {
                    headers: { "Content-Type": "application/json" },
                }
            );
    
            localStorage.setItem("token", response.data.token); // ✅ Axios stores JSON response in `data`
            setIsUserLoggedIn(true);
            console.log("hi");
            navigate("/");
        } catch (err) {
            setError(err.response?.data?.message || "Invalid credentials");
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <Row>
                <Col md={12}>
                    <Card className="shadow-lg">
                        <Card.Body>
                            <h2 className="text-center mb-4">Login</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleLogin}>
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

                                <Button variant="primary" type="submit" className="w-100">
                                    Login
                                </Button>
                            </Form>
                            <p className="text-center mt-3">
                                Don't have an account?{" "}
                                <a href="/register" className="text-primary">
                                    Register
                                </a>
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
