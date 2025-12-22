import React, { useContext, useState } from 'react';
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaImage,
  FaEye,
  FaEyeSlash,
} from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate, useLocation } from 'react-router'; // useLocation যোগ করা হয়েছে
import Swal from 'sweetalert2';
import { AuthContext } from '../Routes/AuthProvider';

const Register = () => {
  // ১. AuthContext থেকে প্রয়োজনীয় ফাংশনগুলো নিন
  const { singInWithGoogle, createNewUser, setUser, updateUserProfile } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    // --- ২. আগে পাসওয়ার্ড ভেরিফিকেশন করুন (Firebase কল করার আগে) ---
    if (password.length < 6) {
      return Swal.fire({
        icon: 'error',
        title: 'Invalid Password',
        text: 'Password must be at least 6 characters long!',
      });
    }
    if (!/[A-Z]/.test(password)) {
      return Swal.fire({
        icon: 'error',
        title: 'Invalid Password',
        text: 'Must have at least one Uppercase letter!',
      });
    }
    if (!/[a-z]/.test(password)) {
      return Swal.fire({
        icon: 'error',
        title: 'Invalid Password',
        text: 'Must have at least one Lowercase letter!',
      });
    }

    // --- ৩. ভেরিফিকেশন সফল হলে Firebase এ ইউজার তৈরি করুন ---
    createNewUser(email, password)
      .then((result) => {
        // ৪. ইউজার প্রোফাইল আপডেট (নাম ও ছবি সেট করা)
        updateUserProfile(name, photo)
          .then(() => {
            setUser({ ...result.user, displayName: name, photoURL: photo });

            Swal.fire({
              title: 'Success!',
              text: 'Welcome to Toy Galaxy!',
              icon: 'success',
              timer: 1500,
              showConfirmButton: false,
            });

            form.reset();
            navigate(from, { replace: true });
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.error('Registration error:', error.code);
        let errorMessage = 'Something went wrong. Please try again.';

        if (error.code === 'auth/email-already-in-use') {
          errorMessage = 'This email is already registered!';
        }

        Swal.fire({
          title: 'Registration Failed!',
          text: errorMessage,
          icon: 'error',
          confirmButtonColor: '#E91E63',
        });
      });
  };

  const handleGoogleSignIn = () => {
    singInWithGoogle()
      .then((result) => {
        setUser(result.user);
        Swal.fire({
          title: 'Success!',
          text: 'Registration Successful',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          title: 'Failed!',
          text: error.message,
          icon: 'error',
        });
      });
  };

  return (
    <div className="">
      <title>ToyGalaxy | Register</title>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
          <div className="text-center">
            <h2 className="text-3xl font-black text-gray-800 uppercase tracking-tight">
              Join the <span className="text-[#673AB7]">Galaxy!</span>
            </h2>
            <p className="mt-2 text-sm text-gray-500 font-medium">
              Create an account to explore more toys
            </p>
          </div>

          <form onSubmit={handleRegister} className="mt-8 space-y-5">
            <div className="space-y-4">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                  <FaUser />
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#673AB7]"
                  placeholder="Full Name"
                />
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                  <FaEnvelope />
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#673AB7]"
                  placeholder="Email Address"
                />
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                  <FaImage />
                </span>
                <input
                  type="text"
                  name="photo"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#673AB7]"
                  placeholder="Photo URL"
                />
              </div>
              <div className="relative w-full">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                  <FaLock />
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#673AB7]"
                  placeholder="Create Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 font-bold rounded-xl text-white bg-[#E91E63] hover:bg-[#673AB7] transition-all shadow-lg active:scale-95"
            >
              CREATE ACCOUNT
            </button>
          </form>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase font-bold text-gray-400">
              <span className="px-2 bg-white">Or sign up with</span>
            </div>
          </div>

          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="flex items-center justify-center gap-3 w-full py-3 px-4 border-2 border-gray-100 rounded-xl font-bold text-gray-600 hover:bg-gray-50 transition-all active:scale-95"
          >
            <FcGoogle className="text-2xl" /> <span>Sign up with Google</span>
          </button>

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
    </div>
  );
};

export default Register;
