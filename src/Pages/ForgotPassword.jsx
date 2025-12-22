import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router';
import { AuthContext } from '../Routes/AuthProvider';
import Swal from 'sweetalert2';

const ForgotPassword = () => {
  const { resetPassword } = useContext(AuthContext); // কনটেক্সট থেকে ফাংশনটি নিন
  const location = useLocation();
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleReset = (e) => {
    e.preventDefault();

    // ১. প্রথমে ফায়ারবেসকে বলবো ওই ইউজারের মেইলে লিঙ্ক পাঠাতে
    console.log('Resetting password for:', email);
    resetPassword(email)
      .then(() => {
        Swal.fire({
          title: 'Check Your Inbox',
          text: 'আমরা আপনার রেজিস্টার্ড মেইলে রিসেট লিঙ্ক পাঠিয়েছি।',
          icon: 'success',
        }).then(() => {
          // ২. সরাসরি জিমেইলে পাঠিয়ে দেওয়া
        });
      })
      .catch((error) => {
        Swal.fire('Error', 'এই ইমেইলটি আমাদের ডাটাবেজে নেই!', error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-10 bg-white rounded-3xl shadow-xl border border-gray-100">
        <h2 className="text-2xl font-black text-gray-800 mb-6 uppercase text-center">
          Reset <span className="text-[#673AB7]">Password</span>
        </h2>
        <form onSubmit={handleReset} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Registered Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#673AB7] outline-none"
              placeholder="Enter your registered email"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 font-bold rounded-xl text-white bg-[#673AB7] hover:bg-[#E91E63] transition-all shadow-lg"
          >
            SEND RESET LINK
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
