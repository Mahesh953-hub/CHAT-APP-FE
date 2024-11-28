import React, { useEffect } from 'react';
import { useWebSocket } from '../../hooks/useWebSocket';
import { useMessages } from '../../store/messageStore';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../store/userStore';

export const Chat: React.FC = () => {
  const { sendMessage } = useWebSocket();
  const messages = useMessages((state) => state.messages);
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.name) {
      navigate('/profile');
    }
  }, [user, navigate]);

  return (
    <div className="flex flex-col h-full p-4 max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 h-full">
        <MessageList messages={messages} />
        <MessageInput onSendMessage={sendMessage} />
      </div>
    </div>
  );
};
