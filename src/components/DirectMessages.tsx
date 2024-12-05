import React from 'react';
import { Search } from 'lucide-react';

interface User {
  id: string;
  name: string;
  status: 'online' | 'offline';
  time: string;
  avatar: string;
}

const users: User[] = [
  {
    id: '1',
    name: 'Lina Kerry',
    status: 'online',
    time: '12:45',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: '2',
    name: 'Wesley Ray',
    status: 'online',
    time: '12:11',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: '3',
    name: 'Eula Burton',
    status: 'offline',
    time: '12:09',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: '4',
    name: 'Viola Morales',
    status: 'offline',
    time: '11:45',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: '5',
    name: 'Vincent Terry',
    status: 'online',
    time: '11:41',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: '6',
    name: 'Neil Burns',
    status: 'offline',
    time: '11:16',
    avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: '7',
    name: 'Lydia Sutton',
    status: 'online',
    time: '11:05',
    avatar: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
];

export function DirectMessages() {
  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-gray-100 dark:border-dark-700">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-dark-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-dark-700 rounded-lg text-sm focus:outline-none dark:text-dark-200 dark:placeholder-dark-400"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-8 scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-dark-700 scrollbar-track-transparent">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xs font-semibold text-gray-500 dark:text-dark-400">DIRECT MESSAGES</h2>
          <button className="text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium">
            + ADD NEW
          </button>
        </div>
        <div className="space-y-1">
          {users.map((user) => (
            <div key={user.id} className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-dark-700 rounded-lg cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                  {user.status === 'online' && (
                    <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white dark:ring-dark-800 bg-green-400" />
                  )}
                </div>
                <span className="text-sm text-gray-900 dark:text-dark-200">{user.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`text-xs ${user.status === 'online' ? 'text-green-500' : 'text-gray-400'}`}>
                  {user.status === 'online' ? 'Online' : 'Offline'}
                </span>
                <span className="text-xs text-gray-400 dark:text-dark-500">{user.time}</span>
            </div>
            </div>
          ))}
        </div>
        
        <button className="w-full text-sm text-gray-500 dark:text-dark-400 hover:text-gray-600 dark:hover:text-dark-300 mt-4">
          SHOW MORE
        </button>

        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xs font-semibold text-gray-500 dark:text-dark-400">CHANNELS</h2>
            <button className="text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium">
              + ADD NEW
            </button>
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-dark-700 rounded-lg cursor-pointer">
              <div className="flex items-center space-x-3">
                <span className="text-purple-500">🎨</span>
                <span className="text-sm text-gray-900 dark:text-dark-200">Design & Branding</span>
              </div>
              <span className="text-xs text-pink-500">+13</span>
            </div>
            <div className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-dark-700 rounded-lg cursor-pointer">
              <div className="flex items-center space-x-3">
                <span>💰</span>
                <span className="text-sm text-gray-900 dark:text-dark-200">Payment Workers</span>
              </div>
              <span className="text-xs text-pink-500">+12</span>
            </div>
            <div className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-dark-700 rounded-lg cursor-pointer">
              <div className="flex items-center space-x-3">
                <span>🎧</span>
                <span className="text-sm text-gray-900 dark:text-dark-200">Tech Support</span>
              </div>
              <span className="text-xs text-pink-500">+18</span>
            </div>
            <div className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-dark-700 rounded-lg cursor-pointer">
              <div className="flex items-center space-x-3">
                <span>🌈</span>
                <span className="text-sm text-gray-900 dark:text-dark-200">Sales & Marketing</span>
              </div>
              <span className="text-xs text-pink-500">+10</span>
            </div>
            <div className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-dark-700 rounded-lg cursor-pointer">
              <div className="flex items-center space-x-3">
                <span>😊</span>
                <span className="text-sm text-gray-900 dark:text-dark-200">Customer Support</span>
              </div>
              <span className="text-xs text-pink-500">+13</span>
            </div>
          </div>
          <button className="w-full text-sm text-gray-500 dark:text-dark-400 hover:text-gray-600 dark:hover:text-dark-300 mt-4">
            SHOW MORE
          </button>
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xs font-semibold text-gray-500 dark:text-dark-400">GENERAL PROJECTS</h2>
            <button className="text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium">
              + ADD NEW
            </button>
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-dark-700 rounded-lg cursor-pointer">
              <div className="flex items-center space-x-3">
                <span>🌳</span>
                <span className="text-sm text-gray-900 dark:text-dark-200">Green planet</span>
              </div>
              <span className="text-xs text-pink-500">+12</span>
            </div>
            <div className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-dark-700 rounded-lg cursor-pointer">
              <div className="flex items-center space-x-3">
                <span>😎</span>
                <span className="text-sm text-gray-900 dark:text-dark-200">September mood</span>
              </div>
              <span className="text-xs text-pink-500">+5</span>
            </div>
            <div className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-dark-700 rounded-lg cursor-pointer">
              <div className="flex items-center space-x-3">
                <span>🌐</span>
                <span className="text-sm text-gray-900 dark:text-dark-200">General Electric</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-dark-700 rounded-lg cursor-pointer">
              <div className="flex items-center space-x-3">
                <span>🌙</span>
                <span className="text-sm text-gray-900 dark:text-dark-200">Bank of America</span>
              </div>
            </div>
          </div>
          <button className="w-full text-sm text-gray-500 dark:text-dark-400 hover:text-gray-600 dark:hover:text-dark-300 mt-4">
            SHOW MORE
          </button>
        </div>
      </div>
    </div>
  );
}