import React, { useContext } from 'react';
import ToyGalaxyLogo from '../ToyGalaxyLogo/ToyGalaxyLogo';
import { FaUserAlt } from 'react-icons/fa';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Routes/AuthProvider';

const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate('/login');
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/add-toy">Add Toy</NavLink>
            </li>
            {user && (
              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>
            )}
          </ul>
        </div>
        <Link to={'/'} className="text-2xl p-2">
          <ToyGalaxyLogo />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-white bg-[#673AB7] px-3 py-2 rounded-lg font-bold'
                  : 'text-gray-600 px-3 py-2 font-medium'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-toy"
              className={({ isActive }) =>
                isActive
                  ? 'text-white bg-[#673AB7] px-3 py-2 rounded-lg font-bold'
                  : 'text-gray-600 px-3 py-2 font-medium'
              }
            >
              Add Toy
            </NavLink>
          </li>

          {!loading && user && (
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive
                    ? 'text-white bg-[#673AB7] px-3 py-2 rounded-lg font-bold'
                    : 'text-gray-600 px-3 py-2 font-medium'
                }
              >
                Profile
              </NavLink>
            </li>
          )}
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-2">
        {loading ? (
          <div className="flex items-center gap-3">
            <span className="loading loading-spinner loading-md text-[#673AB7]"></span>
          </div>
        ) : (
          <>
            {user && user?.email ? (
              <button
                onClick={handleLogOut}
                className="flex items-center gap-2 btn-ghost px-3 font-bold text-[16px] hover:text-[#E91E63] transition-all"
              >
                <FaUserAlt /> Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-2 btn-ghost px-3 font-bold text-[16px] hover:text-[#673AB7] transition-all"
              >
                <FaUserAlt /> Login
              </Link>
            )}

            {user && (
              <div className="relative group flex items-center">
                <div className="h-10 w-10 border-2 border-[#673AB7] rounded-full overflow-hidden cursor-pointer shadow-sm">
                  <img
                    src={
                      user?.photoURL ||
                      'https://i.ibb.co/mJR9Qxc/user-placeholder.png'
                    }
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute right-0 top-12 scale-0 group-hover:scale-100 transition-all duration-300 origin-top z-50">
                  <div className="bg-[#673AB7] text-white text-xs font-bold py-2 px-4 rounded-lg shadow-xl whitespace-nowrap relative">
                    {user?.displayName || 'Anonymous User'}
                    <div className="absolute -top-1 right-4 w-2 h-2 bg-[#673AB7] rotate-45"></div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
