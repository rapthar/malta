import React from 'react';
import { Users, BarChart2, ClipboardList, Boxes, MessageCircle, Users2, ListTodo, Bell, UserCircle, Settings, Zap } from 'lucide-react';
import { ProjectList } from './ProjectList';
import { ChannelList } from './ChannelList';
import { useNavigation } from '../hooks/useNavigation';
import type { MenuItem } from '../types';

const mainMenuItems = [
  { id: 'dashboard', icon: Boxes, label: 'Dashboard', isActive: true },
  { id: 'clients', icon: Users, label: 'Clients', notifications: 5 },
  { id: 'reporting', icon: BarChart2, label: 'Reporting', notifications: 13 },
  { id: 'tasks', icon: ClipboardList, label: 'Tasks', notifications: 2 }
];

const projectSubMenu = [
  { id: 'progress', icon: BarChart2, label: 'Progress' },
  { id: 'chat', icon: MessageCircle, label: 'Chat' },
  { id: 'team', icon: Users2, label: 'Team members' },
  { id: 'backlog', icon: ListTodo, label: 'Backlog' }
];

export function Sidebar() {
  const { activeSection, setActiveSection } = useNavigation();

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6 flex items-center space-x-3">
        <Zap className="w-6 h-6 text-indigo-600" />
        <h1 className="text-xl font-bold text-gray-900">Malta Company</h1>
      </div>

      <div className="flex-1 overflow-y-auto px-3 space-y-6 py-6">
        <div>
          <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
            Main Menu
          </h3>
          <nav className="space-y-1">
            {mainMenuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg ${
                  item.isActive ? 'text-indigo-600' : 'text-gray-600'
                } ${item.id === 'dashboard' ? 'bg-gray-50' : 'hover:bg-gray-50'}`}
              >
                <div className="flex items-center space-x-2">
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </div>
                {item.notifications && (
                  <span className="ml-auto bg-pink-500 text-white px-2 py-0.5 rounded-full text-xs">
                    {item.notifications}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        <div>
          <h3 className="px-3 text-xs font-semibold text-indigo-600 mb-1">
            Projects
          </h3>
          <div className="bg-gray-50 rounded-lg p-2">
            <button className="w-full flex items-center justify-between p-2 text-indigo-600 hover:bg-white rounded-lg">
              <div className="flex items-center space-x-2">
                <span className="text-xl">🏆</span>
                <span className="text-sm">Zeeker Project</span>
              </div>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div className="mt-2 space-y-1">
              {projectSubMenu.map((item) => (
                <button
                  key={item.id}
                  className="w-full flex items-center space-x-2 px-2 py-1.5 text-sm text-gray-600 hover:bg-white rounded-lg"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="mt-2 space-y-1">
            <button className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
              <span className="text-xl">🎯</span>
              <span>Micoory_X Project</span>
            </button>
            <button className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
              <span className="text-xl">🎨</span>
              <span>Slash Motion Project</span>
            </button>
            <button className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
              <span className="text-xl">📊</span>
              <span>Diagramma Project</span>
            </button>
          </div>
          
          <button className="w-full text-sm text-gray-500 hover:text-gray-600 mt-2 px-3 py-2">
            SHOW MORE
          </button>
        </div>

        <div>
          <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
            Second Menu
          </h3>
          <nav className="space-y-1">
            <button
              onClick={() => setActiveSection('notifications')}
              className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <Bell className="w-5 h-5" />
              <span>Notifications</span>
            </button>
            <button
              onClick={() => setActiveSection('users')}
              className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <UserCircle className="w-5 h-5" />
              <span>Users</span>
            </button>
            <button
              onClick={() => setActiveSection('settings')}
              className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}