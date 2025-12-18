import React from 'react';

import { FaEnvelope, FaLock } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  const handleLogin = (e) => {
    e.preventDefault();
    // এখানে আপনার লগইন লজিক (Firebase/Auth) বসবে
    console.log('Logging in...');
    // লগইন সফল হলে আগের পেজে নিয়ে যাবে
    navigate(from, { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-3xl font-black text-gray-800 uppercase tracking-tight">
            Welcome <span className="text-[#673AB7]">Back!</span>
          </h2>
          <p className="mt-2 text-sm text-gray-500 font-medium">
            Please enter your details to sign in
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <div className="space-y-4">
            {/* Email Input */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <FaEnvelope />
              </span>
              <input
                type="email"
                required
                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#673AB7] focus:border-transparent transition-all"
                placeholder="Email Address"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <FaLock />
              </span>
              <input
                type="password"
                required
                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#673AB7] focus:border-transparent transition-all"
                placeholder="Password"
              />
            </div>
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-[#673AB7] hover:bg-[#E91E63] transition-all duration-300 shadow-lg transform active:scale-95"
            >
              SIGN IN
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-400 uppercase font-bold text-xs">
              Or continue with
            </span>
          </div>
        </div>

        {/* Social Login */}
        <div className="grid grid-cols-1 gap-3">
          <button className="flex items-center justify-center gap-3 w-full py-3 px-4 border-2 border-gray-100 rounded-xl font-bold text-gray-600 hover:bg-gray-50 transition-all active:scale-95">
            <FcGoogle className="text-2xl" />

            <span>Google</span>
          </button>
        </div>

        {/* Footer Link */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{' '}
          <Link
            to="/register"
            className="font-bold text-[#E91E63] hover:underline"
          >
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
