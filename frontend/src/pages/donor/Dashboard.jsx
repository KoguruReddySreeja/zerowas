import React from "react";
import {
  PlusCircle,
  MapPin,
  Package,
  Users,
  Leaf,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const DonorDashboard = () => {
  return (
    <div className="flex flex-col h-full overflow-y-auto p-6 bg-[#eaf4eb]">
      {/* Greeting */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-[#204122]">Hi, Rahul 👋</h1>
        <p className="text-lg text-[#344e41] mt-2">
          You've donated{" "}
          <span className="font-semibold text-[#e76f51]">3kg</span> of food
          today. Thank you! 💚
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div className="bg-white shadow rounded-2xl p-6 flex items-center gap-6">
          <Package className="w-10 h-10 text-[#1b4332]" />
          <div>
            <p className="text-md text-[#344e41] font-medium">Total Donations</p>
            <p className="text-2xl font-bold text-[#081c15]">128</p>
          </div>
        </div>
        <div className="bg-white shadow rounded-2xl p-6 flex items-center gap-6">
          <Users className="w-10 h-10 text-[#d00000]" />
          <div>
            <p className="text-md text-[#344e41] font-medium">People Served</p>
            <p className="text-2xl font-bold text-[#081c15]">540+</p>
          </div>
        </div>
        <div className="bg-white shadow rounded-2xl p-6 flex items-center gap-6">
          <Leaf className="w-10 h-10 text-[#007f5f]" />
          <div>
            <p className="text-md text-[#344e41] font-medium">CO₂ Saved</p>
            <p className="text-2xl font-bold text-[#081c15]">86.2 kg</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <Link
          to="/donor/create"
          className="flex items-center justify-center gap-3 bg-[#007f5f] text-white px-6 py-4 rounded-xl text-lg font-semibold shadow hover:bg-[#005f45] transition"
        >
          <PlusCircle className="w-6 h-6" />
          Create New Donation
        </Link>
        <Link
          to="/donor/map"
          className="flex items-center justify-center gap-3 bg-[#e76f51] text-white px-6 py-4 rounded-xl text-lg font-semibold shadow hover:bg-[#d3543a] transition"
        >
          <MapPin className="w-6 h-6" />
          View Map
        </Link>
      </div>

      {/* Scrollable Extra Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Recent Donations */}
        <div className="bg-white rounded-2xl p-6 shadow">
          <h2 className="text-xl font-bold mb-4 text-[#204122]">
            Recent Donations
          </h2>
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <p className="text-[#081c15] text-md">🍛 Veg Rice - 2kg</p>
              <span className="text-sm font-semibold text-green-600">
                Delivered
              </span>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-[#081c15] text-md">🥘 Paneer Curry - 1.5kg</p>
              <span className="text-sm font-semibold text-yellow-600">
                Pending
              </span>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-[#081c15] text-md">🍞 Bread Pack - 3kg</p>
              <span className="text-sm font-semibold text-green-600">
                Delivered
              </span>
            </li>
          </ul>
        </div>

        {/* Impact / Motivation */}
        <div className="bg-white rounded-2xl p-6 shadow">
          <h2 className="text-xl font-bold mb-4 text-[#204122]">Your Impact</h2>
          <div className="flex flex-col gap-4 text-md text-[#081c15]">
            <div className="flex items-start gap-4">
              <TrendingUp className="w-6 h-6 text-[#e76f51]" />
              <p>
                Every 1kg of food saved prevents ~2.5kg of CO₂ emissions.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Leaf className="w-6 h-6 text-[#007f5f]" />
              <p>
                You’ve helped reduce landfill and nourished over{" "}
                <span className="font-semibold">500+ people</span>.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Users className="w-6 h-6 text-[#d00000]" />
              <p>
                Communities are safer and stronger because of donors like you 💚
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sustainability Tips / Footer */}
      <div className="bg-[#fef6ed] border-l-4 border-[#e76f51] rounded-xl p-5 text-md text-[#3c3c3c] shadow mb-6 font-medium">
        🌿{" "}
        <span className="font-bold">Sustainability Tip:</span> Consider
        packaging food in reusable or compostable containers for your next
        donation!
      </div>
    </div>
  );
};

export default DonorDashboard;
