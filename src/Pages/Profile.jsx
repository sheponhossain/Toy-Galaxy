import React, { useState, useEffect, useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Routes/AuthProvider';

const Profile = () => {
  const { user, updateUserProfile, setUser } = useContext(AuthContext);

  useEffect(() => {
    document.title = 'ToyGalaxy | Profile';
  }, []);

  const [name, setName] = useState(user?.displayName || '');
  const [photo, setPhoto] = useState(user?.photoURL || '');

  useEffect(() => {
    setName(user?.displayName || '');
    setPhoto(user?.photoURL || '');
  }, [user]);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!name || !photo) {
      return Swal.fire({
        icon: 'warning',
        title: 'Wait!',
        text: 'Name and Photo URL cannot be empty.',
      });
    }

    updateUserProfile(name, photo)
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });

        Swal.fire({
          icon: 'success',
          title: 'Profile Updated!',
          text: 'Your information has been saved successfully.',
          confirmButtonColor: '#673AB7',
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({ icon: 'error', title: 'Oops...', text: error.message });
      });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-6">
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
          {/* Profile Display Section */}
          <div className="md:w-1/3 bg-[#673AB7] p-10 text-center text-white">
            <div className="relative inline-block">
              <img
                src={
                  user?.photoURL ||
                  'https://i.ibb.co.com/mJR9Qxc/user-placeholder.png'
                }
                alt="profile"
                className="w-32 h-32 rounded-full mx-auto border-4 border-white/30 object-cover mb-4"
              />
            </div>
            <h2 className="text-xl font-bold">
              {user?.displayName || 'Guest User'}
            </h2>
            <p className="text-sm opacity-80">{user?.email}</p>
          </div>

          {/* Edit Form Section */}
          <div className="md:w-2/3 p-10">
            <h3 className="text-2xl font-black text-gray-800 mb-6 uppercase">
              Update <span className="text-[#E91E63]">Profile</span>
            </h3>

            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#673AB7] outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">
                  Photo URL
                </label>
                <input
                  type="text"
                  placeholder="Paste image link here"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#673AB7] outline-none transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#E91E63] text-white font-bold py-3 rounded-xl hover:bg-[#673AB7] transition-all shadow-lg active:scale-95"
              >
                SAVE CHANGES
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
