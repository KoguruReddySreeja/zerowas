// src/components/admin/map/PostModal.jsx
import React from "react";

const PostModal = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-20 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg w-[90%] max-w-xl p-6 relative">
        <button
          className="absolute top-3 right-3 text-gray-600"
          onClick={onClose}
        >
          ✖
        </button>
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          {post.donor}'s Food Post
        </h2>
        <div className="space-y-2">
          <p><strong>Type:</strong> {post.type}</p>
          <p><strong>Quantity:</strong> {post.quantity}</p>
          <p><strong>Status:</strong> {post.status}</p>
        </div>
        <div className="mt-6 flex justify-end space-x-3">
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
            Approve
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded">
            Flag
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
