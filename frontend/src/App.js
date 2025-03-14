import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home'
import JobDetails from './components/JobDetails'
import CreateJob from "./components/CreateJob";
import Login from "./components/Login";
import Register from "./components/Register";
import SiteNavbar from "./components/SiteNavbar"
import {Container, Navbar, Nav} from "react-bootstrap";
import {React, useEffect, useState} from "react";

function App() {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("token"))
            setIsUserLoggedIn(true);
    }, [isUserLoggedIn]);

    return (
        <Router>
            <SiteNavbar isUserLoggedIn={isUserLoggedIn} setIsUserLoggedIn={setIsUserLoggedIn}/>
            <div className="min-h-screen bg-gray-100 p-4">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/jobs/:id"  element={<JobDetails isUserLoggedIn={isUserLoggedIn}/>}/>
                    <Route path="/create-job" element={<CreateJob/>}/>
                    <Route path="/login" element={<Login setIsUserLoggedIn={setIsUserLoggedIn}/>}/>
                    <Route path="/register" element={<Register/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
