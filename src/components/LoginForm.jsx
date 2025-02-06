import React, { useState } from 'react';
import InputField from '../components/Inputfield';
import schoolLogo from '../assets/Monsters-University-Logo.png';
import MessagePrompt from './Message/MessagePrompt';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setMessageType('error');
            setMessage('Email and password are required');
            return;
        }
        
        //Credentials
        const Email = 'user@example.com';
        const Password = 'password123';

        if (email === Email && password === Password) {
            console.log('Login successful');
            setMessageType('success');
            setMessage('Successfully logged in');

            setTimeout(() => {
                window.location.href = '/homepage';
            }, 1000);
    
        } else {
            setMessageType('error');
            setMessage('Invalid credentials. Please try again.');
            
            setTimeout(() =>{
                closeMessage();
                },1500);
        }
    };

    const closeMessage = () => {
        setMessage('');
        setMessageType('');
    };

    return (
        <div className=" relative w-full max-w-md p-4 sm:p-6 h-[560px] m-[20px] md:p-8 bg-white rounded-xl shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105">
                
                 <div className="absolute top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10">
        <MessagePrompt message={message} type={messageType} onClose={closeMessage} />
      </div>
            <img
                src={schoolLogo}
                alt="Monsters University"
                className="w-20 h-20 mx-auto mb-4 rounded-full shadow-md"
            />
            <h2 className="text-2xl font-semibold text-center text-gray-900 mb-2">Monster University</h2>
            <h3 className="text-center text-lg font-light text-gray-600 mb-6">Please login to your account</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Email Input */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-800">Email</label>
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
                    <label htmlFor="password" className="block text-sm font-medium text-gray-800">Password</label>
                    <InputField
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {/* No Account, Sign-up Link */}
                <div className="text-center text-sm">
                    <span className="text-gray-600">Don't have an account? </span>
                    <a href="/sign-up" className="text-blue-500 hover:underline">Sign up</a>
                </div>

                {/* Login Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Login
                    </button>
                </div>
            </form>
            
      

        
            {/* Forgot Password Link */}
            <div className="text-center mt-4">
                <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
            </div>
        </div>
    );
};

export default LoginForm;
