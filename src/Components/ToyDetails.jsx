import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Routes/AuthProvider'; // রিয়েল ইউজার ডেটার জন্য

const ToyDetails = () => {
  const { id } = useParams();
  const [toy, setToy] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch('/ComingToy.json')
      .then((res) => res.json())
      .then((data) => {
        const foundToy = data.find(
          (item) =>
            String(item.toyId) === String(id) || String(item.id) === String(id)
        );
        setToy(foundToy);
      })
      .catch((err) => console.error('Error fetching toy details:', err));
  }, [id]);

  const handleTryNow = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Interest Recorded!',
      text: `Hello ${user?.displayName || 'User'}, we will contact you soon about ${toy?.toyName}.`,
      icon: 'success',
      confirmButtonColor: '#673AB7',
    });
  };

  if (!toy) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <span className="loading loading-spinner loading-lg text-[#673AB7]"></span>
        <p className="mt-4 text-gray-500 font-medium">
          Fetching Toy Details...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto p-6 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-100">
          {/* Image Section */}
          <div className="h-[400px] md:h-full">
            <img
              src={toy.pictureURL || toy.thumbnail || toy.image}
              alt={toy.toyName}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Info Section */}
          <div className="p-8">
            <div className="flex justify-between items-start">
              <span className="bg-[#673AB7]/10 text-[#673AB7] px-4 py-1 rounded-full text-sm font-bold uppercase">
                {toy.subCategory || toy.category || 'General'}
              </span>
              <div className="flex items-center gap-1 text-yellow-500 font-bold">
                ⭐ {toy.rating}
              </div>
            </div>

            <h1 className="text-4xl font-black text-gray-800 mt-4 mb-2">
              {toy.toyName}
            </h1>

            <p className="text-gray-600 leading-relaxed mb-6">
              {toy.description ||
                'No description available for this amazing toy.'}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-xl">
                <p className="text-gray-500 text-sm">Price</p>
                <p className="text-2xl font-black text-[#E91E63]">
                  ৳{toy.price}
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <p className="text-gray-500 text-sm">Stock Available</p>
                <p className="text-2xl font-black text-gray-800">
                  {toy.availableQuantity} pcs
                </p>
              </div>
            </div>

            {/* Try Now Form */}
            <div className="bg-gray-100 p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-gray-800 mb-4 italic text-center">
                Want to try {toy.toyName}?
              </h3>
              <form onSubmit={handleTryNow} className="space-y-4">
                <input
                  type="text"
                  readOnly
                  value={user?.displayName || 'Guest User'}
                  className="w-full px-4 py-2 rounded-lg border bg-gray-200 cursor-not-allowed outline-none"
                />
                <input
                  type="email"
                  readOnly
                  value={user?.email || 'No email found'}
                  className="w-full px-4 py-2 rounded-lg border bg-gray-200 cursor-not-allowed outline-none"
                />
                <button
                  type="submit"
                  className="w-full bg-[#E91E63] text-white font-bold py-3 rounded-xl hover:bg-[#673AB7] transition-all shadow-lg active:scale-95"
                >
                  Confirm Interest
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
