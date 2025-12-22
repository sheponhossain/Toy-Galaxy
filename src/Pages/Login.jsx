import React, { use, useState } from 'react';
import { FaEnvelope, FaEye, FaEyeSlash, FaLock } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Routes/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
  const { setUser, singInEmainlPassword, singInWithGoogle } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  // ১. ইমেইল ট্র্যাক করার জন্য স্টেট
  const [email, setEmail] = useState('');

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  // Forgot Password হ্যান্ডেলার
  const handleForgotPasswordRedirect = () => {
    // ইমেইলসহ ফরগেট পাসওয়ার্ড পেজে পাঠানো হচ্ছে
    navigate('/forgot-password', { state: { email } });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const password = form.password.value;

    singInEmainlPassword(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        Swal.fire({
          title: 'Success!',
          text: 'Login Successful',
          icon: 'success',
          confirmButtonText: 'Cool',
          timer: 1500,
        });
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error('Login error:', error.code);
        let errorMessage = 'Something went wrong. Please try again.';
        if (error.code === 'auth/invalid-credential') {
          errorMessage = 'No account found or incorrect password.';
        }
        Swal.fire({
          title: 'Login Failed!',
          text: errorMessage,
          icon: 'error',
          confirmButtonText: 'Try Again',
          confirmButtonColor: '#E91E63',
        });
      });
  };

  const handleGoogleSignIn = () => {
    singInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        Swal.fire({
          title: 'Success!',
          text: 'Login Successful',
          icon: 'success',
          confirmButtonText: 'Cool',
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error('Google Sign-In error:', error);
        Swal.fire({ title: 'Login Failed!', icon: 'error' });
      });
  };

  return (
    <div className="">
      <title>ToyGalaxy | Login</title>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
          <div className="text-center">
            <h2 className="text-3xl font-black text-gray-800 uppercase tracking-tight">
              Welcome <span className="text-[#673AB7]">Back!</span>
            </h2>
            <p className="mt-2 text-sm text-gray-500 font-medium">
              Please sign in to continue
            </p>
          </div>

          <form onSubmit={handleLogin} className="mt-8 space-y-6">
            <div className="space-y-4">
              {/* Email Input */}
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                  <FaEnvelope />
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // ইমেইল স্টেট আপডেট
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#673AB7] outline-none transition-all"
                  placeholder="Email Address"
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                  <FaLock />
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#673AB7] outline-none transition-all"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {/* ২. ফরগেট পাসওয়ার্ড লিঙ্ক */}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleForgotPasswordRedirect}
                  className="text-xs font-bold text-[#673AB7] hover:text-[#E91E63] transition-colors cursor-pointer hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 text-sm font-bold rounded-xl text-white bg-[#673AB7] hover:bg-[#E91E63] transition-all shadow-lg active:scale-95"
              >
                SIGN IN
              </button>
            </div>
          </form>

          {/* ... বাকি অংশ (Social Login & Register Link) ... */}
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

          <div onClick={handleGoogleSignIn} className="grid grid-cols-1 gap-3">
            <button className="flex items-center justify-center gap-3 w-full py-3 px-4 border-2 border-gray-100 rounded-xl font-bold text-gray-600 hover:bg-gray-50 transition-all active:scale-95">
              <FcGoogle className="text-2xl" />
              <span>Google</span>
            </button>
          </div>

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
    </div>
  );
};

export default Login;
