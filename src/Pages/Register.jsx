import React from 'react';
import { FaEnvelope, FaLock, FaUser, FaImage } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2'; // SweetAlert ইম্পোর্ট করা হয়েছে

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // ফর্ম থেকে ডেটা নেওয়া
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    // --- পাসওয়ার্ড ভেরিফিকেশন শুরু ---

    // ১. কমপক্ষে ৬ ক্যারেক্টার হতে হবে
    if (password.length < 6) {
      return Swal.fire({
        icon: 'error',
        title: 'Invalid Password',
        text: 'Password must be at least 6 characters long!',
        confirmButtonColor: '#E91E63',
      });
    }

    // ২. একটি Uppercase লেটার থাকতে হবে
    if (!/[A-Z]/.test(password)) {
      return Swal.fire({
        icon: 'error',
        title: 'Invalid Password',
        text: 'Must have at least one Uppercase letter!',
        confirmButtonColor: '#E91E63',
      });
    }

    // ৩. একটি Lowercase লেটার থাকতে হবে
    if (!/[a-z]/.test(password)) {
      return Swal.fire({
        icon: 'error',
        title: 'Invalid Password',
        text: 'Must have at least one Lowercase letter!',
        confirmButtonColor: '#E91E63',
      });
    }

    // --- ভেরিফিকেশন শেষ ---

    // সব ঠিক থাকলে রেজিস্ট্রেশন সাকসেস মেসেজ
    console.log('Registering:', { name, email, photo, password });

    Swal.fire({
      icon: 'success',
      title: 'Registration Successful!',
      text: 'Welcome to Toy Galaxy!',
      timer: 1500,
      showConfirmButton: false,
    });

    // হোম পেজে নিয়ে যাওয়া
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-3xl font-black text-gray-800 uppercase tracking-tight">
            Join the <span className="text-[#673AB7]">Galaxy!</span>
          </h2>
          <p className="mt-2 text-sm text-gray-500 font-medium">
            Create an account to explore more toys
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleRegister} className="mt-8 space-y-5">
          <div className="space-y-4">
            {/* Name Input */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <FaUser />
              </span>
              <input
                type="text"
                name="name"
                required
                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#673AB7] focus:border-transparent transition-all"
                placeholder="Full Name"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <FaEnvelope />
              </span>
              <input
                type="email"
                name="email"
                required
                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#673AB7] focus:border-transparent transition-all"
                placeholder="Email Address"
              />
            </div>

            {/* Photo URL Input */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <FaImage />
              </span>
              <input
                type="text"
                name="photo"
                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#673AB7] focus:border-transparent transition-all"
                placeholder="Photo URL (Optional)"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <FaLock />
              </span>
              <input
                type="password"
                name="password"
                required
                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#673AB7] focus:border-transparent transition-all"
                placeholder="Create Password"
              />
            </div>
          </div>

          {/* Register Button */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-[#E91E63] hover:bg-[#673AB7] transition-all duration-300 shadow-lg transform active:scale-95"
            >
              CREATE ACCOUNT
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-400 uppercase font-bold text-xs">
              Or sign up with
            </span>
          </div>
        </div>

        {/* Social Register */}
        <div className="grid grid-cols-1 gap-3">
          <button
            type="button"
            className="flex items-center justify-center gap-3 w-full py-3 px-4 border-2 border-gray-100 rounded-xl font-bold text-gray-600 hover:bg-gray-50 transition-all active:scale-95"
          >
            <FcGoogle className="text-2xl" />
            <span>Sign up with Google</span>
          </button>
        </div>

        {/* Footer Link */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{' '}
          <Link
            to="/login"
            className="font-bold text-[#673AB7] hover:underline"
          >
            Login Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
