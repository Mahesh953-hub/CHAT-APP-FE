import React from 'react';
import { Message } from '../../types';
import { formatMessageDate } from '../../utils/date';

interface MessageListProps {
  messages: Message[];
}

export const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className="flex-1 overflow-y-auto space-y-4 mb-4">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex ${msg.isMine ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-xs md:max-w-md p-3 rounded-lg ${
              msg.isMine
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 dark:text-white'
            }`}
          >
            <p>{msg.content}</p>
            <span className="text-xs opacity-75">
              {formatMessageDate(msg.timestamp)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
