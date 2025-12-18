// import React, { useState } from 'react';
// import { updateProfile } from 'firebase/auth';
// import Swal from 'sweetalert2';
// // ধরুন আপনি আপনার AuthContext থেকে user এবং auth নিচ্ছেন
// // import { useAuth } from '../providers/AuthProvider';

// const MyProfile = () => {
//   // ডামি ইউজার (আপনি useContext থেকে রিয়েল ইউজার ডাটা নিবেন)
//   const user = {
//     displayName: 'Toy Lover',
//     email: 'user@example.com',
//     photoURL: 'https://via.placeholder.com/150',
//   };

//   const [name, setName] = useState(user?.displayName || '');
//   const [photo, setPhoto] = useState(user?.photoURL || '');

//   const handleUpdate = (e) => {
//     e.preventDefault();

//     // Firebase updateProfile লজিক
//     updateProfile(auth.currentUser, {
//       displayName: name,
//       photoURL: photo,
//     })
//       .then(() => {
//         Swal.fire({
//           icon: 'success',
//           title: 'Profile Updated!',
//           text: 'Your information has been saved successfully.',
//           confirmButtonColor: '#673AB7',
//         });
//       })
//       .catch((error) => {
//         Swal.fire({ icon: 'error', title: 'Oops...', text: error.message });
//       });
//   };

//   return (
//     <div className="max-w-4xl mx-auto py-12 px-6">
//       <div className="bg-white shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
//         {/* Profile Display */}
//         <div className="md:w-1/3 bg-[#673AB7] p-10 text-center text-white">
//           <img
//             src={user?.photoURL}
//             alt="profile"
//             className="w-32 h-32 rounded-full mx-auto border-4 border-white/30 object-cover mb-4"
//           />
//           <h2 className="text-xl font-bold">{user?.displayName}</h2>
//           <p className="text-sm opacity-80">{user?.email}</p>
//         </div>

//         {/* Edit Form */}
//         <div className="md:w-2/3 p-10">
//           <h3 className="text-2xl font-black text-gray-800 mb-6 uppercase">
//             Update <span className="text-[#E91E63]">Profile</span>
//           </h3>
//           <form onSubmit={handleUpdate} className="space-y-4">
//             <div>
//               <label className="block text-sm font-bold text-gray-700 mb-1">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#673AB7] outline-none"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-bold text-gray-700 mb-1">
//                 Photo URL
//               </label>
//               <input
//                 type="text"
//                 value={photo}
//                 onChange={(e) => setPhoto(e.target.value)}
//                 className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#673AB7] outline-none"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-[#E91E63] text-white font-bold py-3 rounded-xl hover:bg-[#673AB7] transition-all shadow-lg"
//             >
//               SAVE CHANGES
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default MyProfile;
