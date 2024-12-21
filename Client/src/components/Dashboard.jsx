// Dashboard.jsx
import React from 'react';
import Navbar from './NavBar';
import Taskboard from './Taskboard';
// import './ComponentStyle/Dashboard.css'; 

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <Taskboard />
        </div>
    );
};

export default Dashboard;
