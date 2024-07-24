// src/pages/Register.js
import React, { useState } from 'react';
import './Register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const validate = () => {
        let formErrors = {};
        if (!formData.fullName) formErrors.fullName = "Full Name is required.";
        if (!formData.email) {
            formErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = "Email is invalid.";
        }
        if (!formData.password) {
            formErrors.password = "Password is required.";
        } else if (formData.password.length < 8) {
            formErrors.password = "Password must be at least 8 characters.";
        }
        if (formData.confirmPassword !== formData.password) {
            formErrors.confirmPassword = "Passwords do not match.";
        }
        return formErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validate();
        if (Object.keys(formErrors).length === 0) {
            alert("Form submitted successfully!");
        } else {
            setErrors(formErrors);
        }
    }

    return (
        <div className="register-form">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Full Name</label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
                    {errors.fullName && <p className="error">{errors.fullName}</p>}
                </div>
                <div>
                    <label>Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                    {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
