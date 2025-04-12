import React from "react";
import UserRow from "./UserRow";

// Dummy data (replace with API in future)
const users = [
  {
    id: 1,
    name: "Asha Mehta",
    email: "asha@example.com",
    role: "donor",
    verified: true,
    status: "active",
    joined: "2023-11-12",
  },
  {
    id: 2,
    name: "Green NGO",
    email: "contact@greenngo.org",
    role: "receiver",
    verified: false,
    status: "suspended",
    joined: "2024-01-04",
  },
];

const UserTable = ({ filters, onViewPosts }) => {
  const filteredUsers = users.filter((user) => {
    const matchRole = filters.role === "all" || user.role === filters.role;
    const matchVerify =
      filters.verified === "all" ||
      (filters.verified === "verified" && user.verified) ||
      (filters.verified === "unverified" && !user.verified);
    return matchRole && matchVerify;
  });

  return (
    <div className="bg-white rounded-xl shadow overflow-auto">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-100 text-gray-700 font-semibold">
          <tr>
            <th className="px-6 py-3 text-left">Name</th>
            <th className="px-6 py-3 text-left">Email</th>
            <th className="px-6 py-3 text-left">Role</th>
            <th className="px-6 py-3 text-center">Verified</th>
            <th className="px-6 py-3 text-center">Status</th>
            <th className="px-6 py-3 text-center">Joined</th>
            <th className="px-6 py-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <UserRow key={user.id} user={user} onViewPosts={onViewPosts} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
