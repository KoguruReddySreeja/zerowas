// src/pages/admin/MapPage.jsx
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import MapFilterBar from "../../components/admin/map/MapFilterBar";
import PostModal from "../../components/admin/map/PostModal";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix icon paths for leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const getColorByStatus = (status) => {
  if (status === "Fresh") return "green";
  if (status === "Near Expiry") return "orange";
  return "red";
};

const dummyPosts = [
  {
    id: 1,
    donor: "Rajesh Kumar",
    type: "Veg",
    quantity: "15 kg",
    status: "Fresh",
    lat: 28.6239,
    lng: 77.219,
  },
  {
    id: 2,
    donor: "Asha Trust",
    type: "Non-Veg",
    quantity: "10 kg",
    status: "Near Expiry",
    lat: 28.6019,
    lng: 77.199,
  },
  {
    id: 3,
    donor: "NGO FoodBox",
    type: "Veg",
    quantity: "20 kg",
    status: "Picked",
    lat: 28.619,
    lng: 77.189,
  },
];

const MapPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="h-[calc(100vh-64px)] relative">
      <MapFilterBar />

      <MapContainer
        center={[28.6139, 77.209]}
        zoom={13}
        className="h-full z-0"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Food Post Markers */}
        {dummyPosts.map((post) => (
          <Marker
            key={post.id}
            position={[post.lat, post.lng]}
            icon={
              new L.Icon({
                iconUrl: markerIcon,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                className: `marker-${getColorByStatus(post.status)}`,
              })
            }
            eventHandlers={{
              click: () => setSelectedPost(post),
            }}
          >
            <Popup>
              <div className="text-sm">
                <strong>{post.donor}</strong>
                <br />
                {post.type} • {post.quantity}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {selectedPost && (
        <PostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </div>
  );
};

export default MapPage;
