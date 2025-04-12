// src/components/admin/map/MapFilterBar.jsx
import React from "react";

const MapFilterBar = () => {
  return (
    <div className="absolute z-10 top-4 left-4 bg-white shadow-xl rounded-lg p-4 w-72">
      <h2 className="font-semibold text-gray-700 mb-2">Filters</h2>
      <div className="space-y-3">
        <select className="w-full p-2 border rounded">
          <option value="">All Regions</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <select className="w-full p-2 border rounded">
          <option value="">All Status</option>
          <option value="Fresh">Fresh</option>
          <option value="Near Expiry">Near Expiry</option>
          <option value="Picked">Picked</option>
        </select>
      </div>
    </div>
  );
};

export default MapFilterBar;
