import React, { useState, useEffect } from 'react';
import { useUser } from '../store/userStore';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export const Profile: React.FC = () => {
  const { user, updateUser } = useUser();
  const [name, setName] = useState(user?.name || '');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error('Please enter your name');
      return;
    }
    await updateUser({ name });
    toast.success('Profile updated successfully!');
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 dark:text-white text-center">Profile Settings</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Your Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white p-3"
              placeholder="Enter your name"
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Save & Continue
          </button>
        </form>
      </div>
    </div>
  );
};
