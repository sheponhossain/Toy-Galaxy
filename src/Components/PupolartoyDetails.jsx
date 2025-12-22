import { useEffect, useState } from 'react';
import {
  FaStar,
  FaStore,
  FaEnvelope,
  FaBox,
  FaShippingFast,
  FaCheckCircle,
  FaUserCircle,
} from 'react-icons/fa';
import { useParams } from 'react-router';

const PupolarToyDetails = () => {
  const { id } = useParams();
  const [toy, setToy] = useState(null); // Initial value null রাখা ভালো
  console.log('PupolarToyDetails toy state:', toy);

  useEffect(() => {
    fetch('/PopularToy.json')
      .then((res) => res.json())
      .then((data) => {
        const foundToy = data.find((item) => item.toyId == id);
        setToy(foundToy);
      });
  }, [id]);

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Sarah's Mom",
      rating: 5,
      text: 'My daughter loves these blocks! The colors are so vibrant.',
    },
  ]);
  const [newReview, setNewReview] = useState('');

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (newReview.trim() === '') return;

    const reviewObj = {
      id: reviews.length + 1,
      name: 'Galaxy Explorer',
      rating: 5,
      text: newReview,
    };

    setReviews([...reviews, reviewObj]);
    setNewReview('');
  };

  // ডাটা আসার আগ পর্যন্ত লোডিং দেখানো জরুরি যাতে undefined error না আসে
  if (!toy) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold text-[#673AB7]">
        Loading Toy Details...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fcfaff] py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-xl overflow-hidden border border-purple-50">
        <div className="flex flex-col lg:flex-row">
          {/* Left Side: Toy Image */}
          <div className="lg:w-1/2 p-8 bg-[#f3f0ff] flex items-center justify-center">
            <div className="relative group">
              <img
                src={toy.pictureURL || toy.thumbnail} // যদি pictureURL না থাকে তবে thumbnail দেখাবে
                alt={toy.toyName}
                className="rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500 max-h-[500px] object-cover"
              />
              <span className="absolute top-4 left-4 bg-[#E91E63] text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                {toy.subCategory || toy.category}
              </span>
            </div>
          </div>

          {/* Right Side: Toy Info */}
          <div className="lg:w-1/2 p-8 lg:p-12">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-4xl font-black text-gray-800">
                {toy.toyName}
              </h1>
              <div className="flex items-center gap-1 bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-bold">
                <FaStar className="text-yellow-500" /> {toy.rating}
              </div>
            </div>

            {/* Seller Card */}
            <div className="bg-purple-50 p-4 rounded-2xl mb-6 flex flex-wrap gap-4 items-center border border-purple-100">
              <div className="flex items-center gap-2">
                <FaStore className="text-[#673AB7]" />
                <span className="font-bold text-gray-700">
                  {toy.sellerName || 'Toy Galaxy Seller'}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <FaEnvelope className="text-[#673AB7]" />
                <span>{toy.sellerEmail || 'support@toygalaxy.com'}</span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8 text-lg italic">
              "
              {toy.description ||
                'Bring home the joy of discovery with this amazing toy! Perfect for developing creativity and fun-filled play hours.'}
              "
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <p className="text-gray-400 text-xs uppercase font-black mb-1">
                  Price
                </p>
                <p className="text-3xl font-black text-[#673AB7]">
                  ${toy.price}
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <p className="text-gray-400 text-xs uppercase font-black mb-1">
                  Availability
                </p>
                <p
                  className={`text-xl font-bold ${toy.availableQuantity > 0 ? 'text-green-500' : 'text-red-500'}`}
                >
                  {toy.availableQuantity > 0
                    ? `${toy.availableQuantity} Items left`
                    : 'Out of Stock'}
                </p>
              </div>
            </div>

            <button className="w-full bg-[#673AB7] hover:bg-[#E91E63] text-white py-5 rounded-2xl font-black text-xl shadow-lg shadow-purple-200 transition-all active:scale-95 flex items-center justify-center gap-3">
              <FaBox /> Add to Wishlist
            </button>

            <div className="mt-6 flex items-center gap-6 text-sm font-bold text-gray-400">
              <span className="flex items-center gap-2">
                <FaShippingFast /> Free Delivery
              </span>
              <span className="flex items-center gap-2">
                <FaCheckCircle /> Safety Verified
              </span>
            </div>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="p-8 lg:p-12 border-t border-gray-100 bg-gray-50">
          <h3 className="text-2xl font-black text-gray-800 mb-6">
            Family Feedbacks & Ratings
          </h3>

          <div className="space-y-4 mb-10">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-3">
                  <FaUserCircle className="text-3xl text-purple-200" />
                  <div>
                    <p className="font-bold">{rev.name}</p>
                    <div className="flex text-yellow-400 text-xs">
                      {[...Array(rev.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{rev.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-white p-8 rounded-[2rem] border-2 border-dashed border-purple-100">
            <h4 className="font-bold text-[#673AB7] mb-4 text-xl">
              Leave a Review for this Toy
            </h4>
            <textarea
              className="w-full p-4 rounded-2xl border-2 border-purple-50 focus:border-[#673AB7] outline-none transition-all"
              rows="3"
              placeholder="How was your experience? Write here..."
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
            ></textarea>
            <button
              onClick={handleSubmitReview}
              className="mt-4 bg-[#673AB7] text-white px-10 py-3 rounded-xl font-bold hover:bg-[#E91E63] transition-all shadow-lg shadow-purple-100"
            >
              Submit Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PupolarToyDetails;
