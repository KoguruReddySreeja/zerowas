// src/components/admin/UserRow.jsx
import React, { useState } from "react";
import UserPostsModal from "./UserPostsModal";
import { Eye, CheckCircle, XCircle, Trash2 } from "lucide-react";

const UserRow = ({ user }) => {
  const [showPosts, setShowPosts] = useState(false);

  const handleVerify = () => {
    console.log("Verify user:", user.id);
  };

  const handleSuspend = () => {
    console.log("Suspend user:", user.id);
  };

  const handleDelete = () => {
    console.log("Delete user:", user.id);
  };

  return (
    <>
      <tr className="border-b hover:bg-gray-50 transition duration-300">
        <td className="py-3 px-4">{user.name}</td>
        <td className="py-3 px-4">{user.email}</td>
        <td className="py-3 px-4 capitalize">{user.role}</td>
        <td className="py-3 px-4">
          <span
            className={`px-2 py-1 text-xs rounded-full font-medium ${
              user.verified ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}
          >
            {user.verified ? "Verified" : "Unverified"}
          </span>
        </td>
        <td className="py-3 px-4">
          <span
            className={`px-2 py-1 text-xs rounded-full font-medium ${
              user.status === "Active" ? "bg-blue-100 text-blue-700" : "bg-yellow-100 text-yellow-800"
            }`}
          >
            {user.status}
          </span>
        </td>
        <td className="py-3 px-4 text-sm">{user.joinedOn}</td>
        <td className="py-3 px-4 space-x-2">
          <button onClick={() => setShowPosts(true)} className="text-blue-600 hover:text-blue-800">
            <Eye size={18} />
          </button>
          <button onClick={handleVerify} className="text-green-600 hover:text-green-800">
            <CheckCircle size={18} />
          </button>
          <button onClick={handleSuspend} className="text-yellow-600 hover:text-yellow-800">
            <XCircle size={18} />
          </button>
          <button onClick={handleDelete} className="text-red-600 hover:text-red-800">
            <Trash2 size={18} />
          </button>
        </td>
      </tr>

      {/* Modal to View Posts */}
      {showPosts && <UserPostsModal user={user} onClose={() => setShowPosts(false)} />}
    </>
  );
};

export default UserRow;
