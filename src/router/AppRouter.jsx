import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import SignUpPage from  '../pages/SignUpPage';
import HomePage from '../pages/HomePage';


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/homepage" element={<HomePage/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
