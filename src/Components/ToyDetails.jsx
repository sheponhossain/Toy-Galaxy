import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import Swal from 'sweetalert2'; // সাকসেস মেসেজের জন্য SweetAlert2 ব্যবহার করা ভালো

const ToyDetails = () => {
  const { id } = useParams();
  const [toy, setToy] = useState(null);

  // ধরি ইউজার অলরেডি লগইন আছে, তাই তার নাম-ইমেইল ডিফল্ট হিসেবে থাকবে
  const user = { name: 'Your Name', email: 'your@email.com' };

  useEffect(() => {
    fetch('/PopularToys.json')
      .then((res) => res.json())
      .then((data) => {
        const foundToy = data.find((toy) => toy.toyId == id || toy.id == id);
        setToy(foundToy);
      });
  }, [id]);

  const handleTryNow = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Success!',
      text: 'Thank you for your interest! We will contact you soon.',
      icon: 'success',
      confirmButtonColor: '#673AB7',
    });
  };

  if (!toy)
    return <div className="text-center py-20">Loading Toy Details...</div>;

  return (
    <div className="max-w-6xl mx-auto p-6 lg:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-100">
        {/* Image Section */}
        <div className="h-96 md:h-full">
          <img
            src={toy.pictureURL || toy.thumbnail}
            alt={toy.toyName}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info Section */}
        <div className="p-8">
          <span className="bg-[#673AB7]/10 text-[#673AB7] px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
            {toy.subCategory || toy.category}
          </span>
          <h1 className="text-3xl font-black text-gray-800 mt-4 mb-2">
            {toy.toyName}
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            {toy.description}
          </p>

          <div className="space-y-3 mb-8">
            <p className="text-lg">
              <strong>Price:</strong>{' '}
              <span className="text-[#E91E63] font-black">৳{toy.price}</span>
            </p>
            <p>
              <strong>Seller:</strong> {toy.sellerName || 'Toy Galaxy Official'}
            </p>
            <p>
              <strong>Stock:</strong> {toy.availableQuantity} pieces
            </p>
            <p>
              <strong>Rating:</strong> ⭐ {toy.rating}
            </p>
          </div>

          {/* Try Now Form */}
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Try Now This Toy
            </h3>
            <form onSubmit={handleTryNow} className="space-y-4">
              <input
                type="text"
                defaultValue={user.name}
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-[#673AB7] outline-none"
                required
              />
              <input
                type="email"
                defaultValue={user.email}
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-[#673AB7] outline-none"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#E91E63] text-white font-bold py-3 rounded-xl hover:bg-[#673AB7] transition-all shadow-lg"
              >
                Try Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
