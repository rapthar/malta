import React from 'react';
import { Menu, Star, MessageCircle, TrendingUp, Briefcase } from 'lucide-react';
import { useNavigation } from '../hooks/useNavigation';

const menuItems = [
  { id: 'menu', icon: Menu },
  { id: 'star', icon: Star },
  { id: 'chat', icon: MessageCircle },
  { id: 'trending', icon: TrendingUp },
  { id: 'briefcase', icon: Briefcase }
];

const avatars = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
];

export function LeftSidebar() {
  const { activeSection, setActiveSection } = useNavigation();

  return (
    <div className="w-16 bg-white border-r border-gray-100 flex flex-col items-center py-4">
      <div className="space-y-4 mb-8">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`p-3 rounded-xl transition-colors ${
              activeSection === item.id
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
            }`}
          >
            <item.icon className="w-5 h-5" />
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {avatars.map((avatar, index) => (
          <button
            key={index}
            className="relative block"
          >
            <img
              src={avatar}
              alt={`Team member ${index + 1}`}
              className="w-10 h-10 rounded-xl object-cover"
            />
            {index === 0 && (
              <span className="absolute -top-1 -right-1 block h-3 w-3 rounded-full bg-red-400 ring-2 ring-white" />
            )}
          </button>
        ))}
      </div>

      <button className="mt-auto p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-xl">
        <Menu className="w-5 h-5" />
      </button>
    </div>
  );
}