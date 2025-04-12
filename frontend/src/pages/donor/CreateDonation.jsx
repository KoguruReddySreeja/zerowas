import React, { useState } from "react";
import { Upload, MapPin, Timer, Utensils, Snowflake, Ruler } from "lucide-react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const CreateDonation = () => {
  const [form, setForm] = useState({
    image: null,
    foodType: "veg",
    perishability: "perishable",
    expiry: "",
    location: "",
    quantity: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    toast.success("Donation created successfully! 🎉");
  };

  return (
    <div className="p-6 bg-[#f6fef8] min-h-screen overflow-y-auto">
      <h1 className="text-3xl font-bold text-[#2f5d3a] mb-6">Create a New Donation</h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-2xl shadow p-6"
      >
        {/* Image Upload */}
        <div className="col-span-1">
          <label className="block mb-2 text-[#264653] font-medium">Upload Image (optional)</label>
          <div className="flex items-center gap-3">
            <input
              type="file"
              accept="image/*"
              className="border border-gray-300 rounded p-2 w-full"
              onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
            />
            <Upload className="text-[#81b29a] w-6 h-6" />
          </div>
          <p className="text-xs text-gray-500 mt-1">AI may predict quantity from the image.</p>
        </div>

        {/* Food Type */}
        <div>
          <label className="block mb-2 text-[#264653] font-medium">Food Type</label>
          <select
            value={form.foodType}
            onChange={(e) => setForm({ ...form, foodType: e.target.value })}
            className="w-full border border-gray-300 rounded p-2"
          >
            <option value="veg">🍃 Vegetarian</option>
            <option value="non-veg">🍗 Non-Vegetarian</option>
          </select>
        </div>

        {/* Perishability */}
        <div>
          <label className="block mb-2 text-[#264653] font-medium">Perishability</label>
          <select
            value={form.perishability}
            onChange={(e) => setForm({ ...form, perishability: e.target.value })}
            className="w-full border border-gray-300 rounded p-2"
          >
            <option value="perishable">🧊 Perishable</option>
            <option value="non-perishable">📦 Non-Perishable</option>
          </select>
        </div>

        {/* Expiry Time / Pickup Deadline */}
        <div>
          <label className="block mb-2 text-[#264653] font-medium">Pickup Deadline</label>
          <div className="flex items-center gap-2">
            <input
              type="datetime-local"
              value={form.expiry}
              onChange={(e) => setForm({ ...form, expiry: e.target.value })}
              className="w-full border border-gray-300 rounded p-2"
            />
            <Timer className="w-5 h-5 text-[#f4a261]" />
          </div>
        </div>

        {/* Location */}
        <div className="md:col-span-2">
          <label className="block mb-2 text-[#264653] font-medium">Location</label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              placeholder="Auto-detect or enter manually"
              className="w-full border border-gray-300 rounded p-2"
            />
            <MapPin className="w-5 h-5 text-[#81b29a]" />
          </div>
        </div>

        {/* Quantity */}
        <div className="md:col-span-2">
          <label className="block mb-2 text-[#264653] font-medium">Estimated Quantity (kg)</label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={form.quantity}
              onChange={(e) => setForm({ ...form, quantity: e.target.value })}
              className="w-full border border-gray-300 rounded p-2"
              placeholder="e.g., 2.5"
            />
            <Ruler className="w-5 h-5 text-[#e76f51]" />
          </div>
        </div>

        {/* Submit */}
        <div className="md:col-span-2 flex justify-end mt-4">
          <button
            type="submit"
            className="bg-[#2a9d8f] hover:bg-[#21867d] text-white px-6 py-3 rounded-xl font-semibold shadow transition"
          >
            Submit Donation
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateDonation;
