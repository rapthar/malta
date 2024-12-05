import React from 'react';
import { Search, ChevronRight } from 'lucide-react';

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
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 space-y-6">
          <div className="relative border-b border-gray-100 pb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-10 py-2 bg-gray-50 rounded-lg text-sm focus:outline-none"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-medium text-gray-600">DIRECT MESSAGES</h2>
              <button className="text-xs text-indigo-600 font-medium">+ ADD NEW</button>
            </div>

            <div className="space-y-1">
              {users.map((user) => (
                <div key={user.id} className="flex items-center justify-between py-2 px-1 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                      {user.status === 'online' && (
                        <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full bg-green-400 ring-1 ring-white" />
                      )}
                    </div>
                    <span className="text-sm text-gray-900">{user.name}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xs text-gray-500">{user.time}</span>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full text-xs text-gray-500 hover:text-gray-600 py-1">
              SHOW MORE
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-medium text-gray-600">CHANNELS</h2>
              <button className="text-xs text-indigo-600 font-medium">+ ADD NEW</button>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between py-2 px-1 hover:bg-gray-50 rounded-lg cursor-pointer">
                <div className="flex items-center space-x-3">
                  <span className="text-purple-500">🎨</span>
                  <span className="text-sm text-gray-900">Design & Branding</span>
                </div>
                <span className="text-xs text-pink-500">+13</span>
              </div>
              <div className="flex items-center justify-between py-2 px-1 hover:bg-gray-50 rounded-lg cursor-pointer">
                <div className="flex items-center space-x-3">
                  <span>💰</span>
                  <span className="text-sm text-gray-900">Payment Workers</span>
                </div>
                <span className="text-xs text-pink-500">+12</span>
              </div>
              <div className="flex items-center justify-between py-2 px-1 hover:bg-gray-50 rounded-lg cursor-pointer">
                <div className="flex items-center space-x-3">
                  <span>🎧</span>
                  <span className="text-sm text-gray-900">Tech Support</span>
                </div>
                <span className="text-xs text-pink-500">+18</span>
              </div>
              <div className="flex items-center justify-between py-2 px-1 hover:bg-gray-50 rounded-lg cursor-pointer">
                <div className="flex items-center space-x-3">
                  <span>🌈</span>
                  <span className="text-sm text-gray-900">Sales & Marketing</span>
                </div>
                <span className="text-xs text-pink-500">+10</span>
              </div>
              <div className="flex items-center justify-between py-2 px-1 hover:bg-gray-50 rounded-lg cursor-pointer">
                <div className="flex items-center space-x-3">
                  <span>😊</span>
                  <span className="text-sm text-gray-900">Customer Support</span>
                </div>
                <span className="text-xs text-pink-500">+13</span>
              </div>
            </div>

            <button className="w-full text-xs text-gray-500 hover:text-gray-600 py-1">
              SHOW MORE
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-medium text-gray-600">GENERAL PROJECTS</h2>
              <button className="text-xs text-indigo-600 font-medium">+ ADD NEW</button>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between py-2 px-1 hover:bg-gray-50 rounded-lg cursor-pointer">
                <div className="flex items-center space-x-3">
                  <span>🌳</span>
                  <span className="text-sm text-gray-900">Green planet</span>
                </div>
                <span className="text-xs text-pink-500">+12</span>
              </div>
              <div className="flex items-center justify-between py-2 px-1 hover:bg-gray-50 rounded-lg cursor-pointer">
                <div className="flex items-center space-x-3">
                  <span>😎</span>
                  <span className="text-sm text-gray-900">September mood</span>
                </div>
                <span className="text-xs text-pink-500">+5</span>
              </div>
              <div className="flex items-center justify-between py-2 px-1 hover:bg-gray-50 rounded-lg cursor-pointer">
                <div className="flex items-center space-x-3">
                  <span>🌐</span>
                  <span className="text-sm text-gray-900">General Electric</span>
                </div>
              </div>
              <div className="flex items-center justify-between py-2 px-1 hover:bg-gray-50 rounded-lg cursor-pointer">
                <div className="flex items-center space-x-3">
                  <span>🌙</span>
                  <span className="text-sm text-gray-900">Bank of America</span>
                </div>
              </div>
            </div>

            <button className="w-full text-xs text-gray-500 hover:text-gray-600 py-1">
              SHOW MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}