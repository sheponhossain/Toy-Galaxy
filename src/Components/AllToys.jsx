import React, { useEffect, useState } from 'react';
import { FaStar, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const AllToys = () => {
  const [allToys, setToys] = useState([]);

  useEffect(() => {
    fetch('/PopularToy.json')
      .then((res) => res.json())
      .then((data) => setToys(data))
      .catch((err) => console.error('Error:', err));
  }, []);

  return (
    <div className="min-h-screen bg-base-200 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <Link to="/" className="btn btn-ghost gap-2 text-[#673AB7]">
            <FaArrowLeft /> Back to Home
          </Link>
          <h2 className="text-4xl font-black text-gray-800">
            Galaxy <span className="text-[#673AB7]">Collection</span>
          </h2>
          <div className="w-24"></div> {/* Balance-er jonno */}
        </div>

        {/* Grid of All Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allToys.map((toy) => (
            <div
              key={toy.id}
              className="bg-white rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all relative group"
            >
              {/* Upcoming Badge */}

              <div className="h-64 rounded-lg overflow-hidden mb-4">
                <img
                  src={toy.pictureURL || toy.thumbnail}
                  alt={toy.toyName}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="px-2">
                <h3 className="text-xl font-bold text-gray-800">
                  {toy.toyName}
                </h3>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-2xl font-black text-[#673AB7]">
                    ${toy.price}
                  </span>
                  <div className="flex items-center gap-1 text-orange-500 font-bold">
                    <FaStar /> {toy.rating}
                  </div>
                </div>
                <Link
                  to={`/popular-toy-details/${toy.toyId}`}
                  className="btn w-full mt-4 bg-[#673AB7] text-white rounded-xl border-none hover:bg-[#E91E63]"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllToys;
