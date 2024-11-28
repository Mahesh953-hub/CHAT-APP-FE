import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Chat } from './components/Chat';
import { Profile } from './components/Profile';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { useTheme } from './hooks/useTheme';
import { Toaster } from 'react-hot-toast';
import { UserIcon } from '@heroicons/react/24/outline';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <Toaster position="top-right" />
      <Router>
        <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
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

          <main className="flex-1 overflow-hidden">
            <Routes>
              <Route path="/" element={<Chat />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
