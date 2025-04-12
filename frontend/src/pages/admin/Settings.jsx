import React, { useState } from 'react';

const SettingsPage = () => {
  // State variables to manage profile details, email, password, and preferences
  const [name, setName] = useState('John Doe');
  const [ngo, setNgo] = useState('Green Earth NGO');
  const [contact, setContact] = useState('john.doe@example.com');
  const [email, setEmail] = useState('john.doe@example.com');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
  });

  // State variables for new admin registration
  const [newAdminName, setNewAdminName] = useState('');
  const [newAdminEmail, setNewAdminEmail] = useState('');
  const [newAdminPassword, setNewAdminPassword] = useState('');

  // Handle changes for profile inputs
  const handleProfileChange = (e, setter) => setter(e.target.value);

  // Handle password change
  const handlePasswordChange = (e, setter) => setter(e.target.value);

  // Toggle notification preferences
  const handleNotificationChange = (e) => {
    setNotifications({
      ...notifications,
      [e.target.name]: e.target.checked,
    });
  };

  // Handle logout
  const handleLogout = () => {
    // Implement logout logic here (e.g., clearing session data, redirecting)
    alert('You have been logged out.');
  };

  // Handle form submission for updating email and password
  const handleUpdateAccount = () => {
    // Implement logic to update email/password here
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert('Account updated successfully!');
  };

  // Handle profile update
  const handleUpdateProfile = () => {
    // Implement logic to update the profile (e.g., API call)
    alert('Profile updated successfully!');
  };

  // Handle creating new admin
  const handleCreateAdmin = () => {
    // Add logic to create a new admin (e.g., API call to register a new admin)
    if (!newAdminName || !newAdminEmail || !newAdminPassword) {
      alert('Please fill in all fields to create a new admin!');
      return;
    }
    alert('New Admin Created Successfully!');
    // Reset the form after submission
    setNewAdminName('');
    setNewAdminEmail('');
    setNewAdminPassword('');
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Settings</h1>

      {/* Profile Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-semibold mb-4">Profile</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => handleProfileChange(e, setName)}
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="ngo" className="block text-sm font-medium text-gray-700">
              NGO/Shelter Information
            </label>
            <input
              type="text"
              id="ngo"
              value={ngo}
              onChange={(e) => handleProfileChange(e, setNgo)}
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
              Contact Email
            </label>
            <input
              type="email"
              id="contact"
              value={contact}
              onChange={(e) => handleProfileChange(e, setContact)}
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg"
            />
          </div>
        </div>
        <button
          onClick={handleUpdateProfile}
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 mt-4"
        >
          Update Profile
        </button>
      </div>

      {/* Update Email / Password Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-semibold mb-4">Update Email / Password</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              New Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => handlePasswordChange(e, setEmail)}
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              id="password"
              value={newPassword}
              onChange={(e) => handlePasswordChange(e, setNewPassword)}
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => handlePasswordChange(e, setConfirmPassword)}
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg"
            />
          </div>
        </div>
        <button
          onClick={handleUpdateAccount}
          className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 mt-4"
        >
          Update Account
        </button>
      </div>

      {/* Notification Preferences Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
        <div className="space-y-4">
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="email"
                checked={notifications.email}
                onChange={handleNotificationChange}
                className="mr-2"
              />
              Receive Email Notifications
            </label>
          </div>
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="sms"
                checked={notifications.sms}
                onChange={handleNotificationChange}
                className="mr-2"
              />
              Receive SMS Notifications
            </label>
          </div>
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="push"
                checked={notifications.push}
                onChange={handleNotificationChange}
                className="mr-2"
              />
              Receive Push Notifications
            </label>
          </div>
        </div>
      </div>

      {/* Create New Admin Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-semibold mb-4">Create New Admin</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="newAdminName" className="block text-sm font-medium text-gray-700">
              Admin Name
            </label>
            <input
              type="text"
              id="newAdminName"
              value={newAdminName}
              onChange={(e) => setNewAdminName(e.target.value)}
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="newAdminEmail" className="block text-sm font-medium text-gray-700">
              Admin Email
            </label>
            <input
              type="email"
              id="newAdminEmail"
              value={newAdminEmail}
              onChange={(e) => setNewAdminEmail(e.target.value)}
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="newAdminPassword" className="block text-sm font-medium text-gray-700">
              Admin Password
            </label>
            <input
              type="password"
              id="newAdminPassword"
              value={newAdminPassword}
              onChange={(e) => setNewAdminPassword(e.target.value)}
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg"
            />
          </div>
        </div>
        <button
          onClick={handleCreateAdmin}
          className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 mt-4"
        >
          Create New Admin
        </button>
      </div>

      {/* Logout Button */}
      <div className="flex justify-center">
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
