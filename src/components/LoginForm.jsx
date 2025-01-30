import React, { useState } from 'react';
import axios from '../axios';
import InputField from './Inputfield';
import schoolLogo from '../assets/Monsters-University-Logo.png';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/login', { email, password });
            if (response.status === 200) {
                // Handle successful login
                console.log('Login successful:', response.data);
            } else {
                // Handle login error
                setError(response.data.message || 'Login failed');
            }
        } catch (error) {
            setError('An error occurred. Please try again.');
        }
    };

    return (
            <div className="w-[450px] max-w-md p-6 sm:p-8 space-y-1 bg-white rounded-lg shadow-lg sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
                <img src={schoolLogo} alt="Bulacan State University" className="w-20 h-20 mx-auto rounded-full " />
                <h2 className="text-xl font-semibold text-center mb-1">Monster University</h2>
                <h3 className="text-center text-md font-light tracking-wider mb-6">Please Login your Account</h3>
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
                    {/* No Account, Sign-up Link */}
                    <div className="text-center">
                        <span className="text-sm">Don't have an account?</span>
                        <a href="/sign-up" className="ml-1 text-sm text-blue-500 hover:underline">
                            Sign up
                        </a>
                    </div>

                    {/* Login Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            Login
                        </button>
                    </div>
                </form>

                {/* Forgot Password */}
                <div className="text-center">
                    <a href="#" className="text-sm text-blue-500 hover:underline">
                        Forgot password?
                    </a>
                </div>
                {error && <div className="text-red-500 text-center mt-4">{error}</div>}
            </div>
    );
};

export default LoginForm;
