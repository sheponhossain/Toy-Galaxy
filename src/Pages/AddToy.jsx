import React from 'react';
import {
  FaRocket,
  FaImage,
  FaTag,
  FaDollarSign,
  FaBoxes,
} from 'react-icons/fa';
import Swal from 'sweetalert2';

const AddToy = () => {
  const handleAddToy = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const photo = form.photo.value;
    const category = form.category.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const newToy = { name, photo, category, price, quantity, description };
    console.log(newToy);

    Swal.fire({
      title: 'Success!',
      text: 'Toy added to the Galaxy successfully',
      icon: 'success',
      confirmButtonText: 'Great!',
      confirmButtonColor: '#673AB7',
    });
    form.reset();
  };

  return (
    <div className="min-h-screen bg-base-200 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-[#673AB7] p-8 text-center text-white">
          <h2 className="text-3xl font-bold flex justify-center items-center gap-3">
            <FaRocket className="animate-bounce" /> Add a New Toy to Galaxy
          </h2>
          <p className="mt-2 opacity-80">
            Fill out the form to launch your amazing toy into our store!
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleAddToy} className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Toy Name */}
            <div className="form-control">
              <label className="label font-semibold flex items-center gap-2">
                <FaTag className="text-[#673AB7]" /> Toy Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="e.g. Awesome Action Figure"
                className="input input-bordered focus:border-[#673AB7] outline-none"
                required
              />
            </div>

            {/* Category */}
            <div className="form-control">
              <label className="label font-semibold">Category</label>
              <select
                name="category"
                className="select select-bordered focus:border-[#673AB7]"
                required
              >
                <option disabled selected>
                  Select Category
                </option>
                <option>Action Figures</option>
                <option>Board Games</option>
                <option>Dolls</option>
                <option>LEGO & Blocks</option>
              </select>
            </div>

            {/* Price */}
            <div className="form-control">
              <label className="label font-semibold flex items-center gap-2">
                <FaDollarSign className="text-[#673AB7]" /> Price
              </label>
              <input
                type="number"
                name="price"
                placeholder="Toy Price"
                className="input input-bordered focus:border-[#673AB7]"
                required
              />
            </div>

            {/* Quantity */}
            <div className="form-control">
              <label className="label font-semibold flex items-center gap-2">
                <FaBoxes className="text-[#673AB7]" /> Available Quantity
              </label>
              <input
                type="number"
                name="quantity"
                placeholder="Available Quantity"
                className="input input-bordered focus:border-[#673AB7]"
                required
              />
            </div>
          </div>

          {/* Image URL */}
          <div className="form-control">
            <label className="label font-semibold flex items-center gap-2">
              <FaImage className="text-[#673AB7]" /> Toy Image URL
            </label>
            <input
              type="url"
              name="photo"
              placeholder="https://image-link.com"
              className="input input-bordered focus:border-[#673AB7]"
              required
            />
          </div>

          {/* Description */}
          <div className="form-control">
            <label className="label font-semibold">Detailed Description</label>
            <textarea
              name="description"
              className="textarea textarea-bordered h-24 focus:border-[#673AB7]"
              placeholder="Tell us more about this toy..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button className="btn bg-[#673AB7] hover:bg-[#512da8] text-white border-none text-lg font-bold shadow-lg transition-all transform hover:scale-105">
              <FaRocket /> Add Toy to Galaxy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToy;
