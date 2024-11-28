"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_STORAGE_KEY = exports.THEME_STORAGE_KEY = exports.SOCKET_URL = exports.API_URL = void 0;
exports.API_URL = import.meta.env.VITE_API_URL || 'https://chat-app-ws-jrj3.onrender.com:3000';
exports.SOCKET_URL = import.meta.env.VITE_SOCKET_URL || 'https://chat-app-ws-jrj3.onrender.com:3000';
exports.THEME_STORAGE_KEY = 'theme-storage';
exports.USER_STORAGE_KEY = 'user-storage';
