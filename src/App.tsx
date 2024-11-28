import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Chat } from './components/chat/Chat';
import { Profile } from './components/profile/Profile';
import { Header } from './components/layout/Header';
import { useTheme } from './hooks/useTheme';
import { Toaster } from 'react-hot-toast';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <Toaster position="top-right" />
      <Router>
        <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
          <Header />
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
