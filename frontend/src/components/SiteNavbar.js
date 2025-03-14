import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SiteNavbar({ isUserLoggedIn, setIsUserLoggedIn }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token"); // Remove token from storage
        setIsUserLoggedIn(false); // Update state
        navigate("/login"); // Redirect to login page
    };

    const renderAuthLinks = () => {
        if (!isUserLoggedIn) {
            return (
                <>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                </>
            );
        }
        return (
            <>
                <Nav.Link href="/create-job">Post a Job</Nav.Link>
                <Nav.Link onClick={handleLogout} >Logout</Nav.Link>

            </>
        );
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">JobList</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    {renderAuthLinks()}
                </Nav>
            </Container>
        </Navbar>
    );
}

export default SiteNavbar;
