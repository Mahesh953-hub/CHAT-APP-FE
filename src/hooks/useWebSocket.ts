import { useEffect, useCallback } from 'react';
import { io, Socket } from 'socket.io-client';
import { useMessages } from '../store/messageStore';
import { SOCKET_URL } from '../utils/constants';
import { Message } from '../types';
import toast from 'react-hot-toast';

let socket: Socket;

export const useWebSocket = () => {
  const addMessage = useMessages((state) => state.addMessage);

  useEffect(() => {
    socket = io(SOCKET_URL);

    socket.on('connect', () => {
      toast.success('Connected to chat server');
    });

    socket.on('connect_error', () => {
      toast.error('Failed to connect to chat server');
    });

    socket.on('message', (message: Message) => {
      addMessage({
        ...message,
        isMine: false,
      });
    });

    return () => {
      socket.disconnect();
    };
  }, [addMessage]);

  const sendMessage = useCallback((content: string) => {
    if (socket) {
      const message: Message = {
        id: Date.now().toString(),
        content,
        timestamp: new Date().toISOString(),
        isMine: true,
      };
      socket.emit('message', message);
      addMessage(message);
    }
  }, [addMessage]);

  return { sendMessage };
};
