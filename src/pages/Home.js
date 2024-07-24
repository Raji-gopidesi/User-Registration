// src/pages/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to Our Application</h1>
            <p>
                This is a simple user registration application built with React.js. It features a responsive design,
                form validation, and navigation between different pages.
            </p>
            <div className="home-buttons">
                <a href="/register" className="home-button">Register</a>
                <a href="/about" className="home-button">Learn More</a>
            </div>
        </div>
    );
}

export default Home;
