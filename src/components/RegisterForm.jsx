import React, { useState } from 'react';
import axios from '../axios';   
import InputField from './Inputfield';

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !name || !password || !confirmPassword) {
            setError('All fields are required');
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        try {
            const response = await axios.post('/register', { email, password });
            if (response.status === 200) {
                console.log('Register successful:', response.data);
            } else {
                setError(response.data.message || 'Register failed');
            }
        } catch (error) {
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="w-full max-w-md p-6 sm:p-8 space-y-1 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-center mb-1">Sign Up</h2>
            
            <div className='text-center'>
            <span className='text-center mb-5 text-sm text-gray-600'>Already have an account?</span>
            <a href="/" className="ml-1 text-sm text-blue-500 hover:underline">
                Login
            </a>           
            </div>
             <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Email Input */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <InputField
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                {/*Name Input*/}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <InputField
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>

                {/* Password Input */}
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <InputField
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {/* Confirm Password Input */}
                <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                        Confirm Password
                    </label>
                    <InputField
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                {/* Register Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Register
                    </button>
                </div>
            </form>
            {error && <div className="text-red-500 text-center mt-4">{error}</div>}
        </div>
    );
};

export default RegisterForm;