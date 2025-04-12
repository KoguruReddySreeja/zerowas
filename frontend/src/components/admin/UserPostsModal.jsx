import React from "react";

const UserPostsModal = ({ user, onClose }) => {
  if (!user) return null; // 🛑 Prevent rendering if user is null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 hover:text-black text-xl"
        >
          ×
        </button>
        <h2 className="text-xl font-semibold mb-4">Posts by {user.name}</h2>

        <div className="space-y-4 max-h-[400px] overflow-y-auto">
          {user.posts && user.posts.length > 0 ? (
            user.posts.map((post, index) => (
              <div key={index} className="border p-3 rounded-md bg-gray-50 shadow-sm">
                <h3 className="font-medium">{post.title}</h3>
                <p className="text-sm text-gray-600">{post.description}</p>
                <p className="text-xs text-gray-400 mt-1">Posted on {post.date}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No posts available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserPostsModal;
