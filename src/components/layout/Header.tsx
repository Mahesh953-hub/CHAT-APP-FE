import React from 'react';
import { Link } from 'react-router-dom';
import { UserIcon } from '@heroicons/react/24/outline';
import { ThemeSwitcher } from './ThemeSwitcher';

export const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white hover:opacity-80 transition-opacity">
          Chat App
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            to="/profile"
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Profile"
          >
            <UserIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </Link>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};
