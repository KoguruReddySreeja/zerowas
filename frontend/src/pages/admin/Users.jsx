// src/pages/admin/Users.jsx
import React, { useState } from "react";
import UserFilterBar from "../../components/admin/UserFilterBar";
import UserTable from "../../components/admin/UserTable";
import UserPostsModal from "../../components/admin/UserPostsModal";

const Users = () => {
  const [filters, setFilters] = useState({ role: "all", verified: "all" });
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFilterChange = (filterKey, value) => {
    setFilters({ ...filters, [filterKey]: value });
  };

  const handleViewPosts = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  return (
    <div className="p-6 sm:p-8 flex flex-col gap-6 overflow-y-auto h-full bg-gray-50">
      <h1 className="text-3xl font-semibold text-gray-800">User Management</h1>
      <UserFilterBar filters={filters} onFilterChange={handleFilterChange} />
      <UserTable filters={filters} onViewPosts={handleViewPosts} />
      <UserPostsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        user={selectedUser}
      />
    </div>
  );
};

export default Users;
