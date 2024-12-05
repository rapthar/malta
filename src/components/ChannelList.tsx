import React from 'react';
import { Hash, CreditCard, Headphones, TrendingUp, Users } from 'lucide-react';
import { useNavigation } from '../hooks/useNavigation';
import type { Channel } from '../types';

const channels: Channel[] = [
  { id: 'design', name: 'Design & Branding', icon: Hash, notifications: 13 },
  { id: 'payment', name: 'Payment Workers', icon: CreditCard, notifications: 12 },
  { id: 'support', name: 'Tech Support', icon: Headphones, notifications: 18 },
  { id: 'sales', name: 'Sales & Marketing', icon: TrendingUp, notifications: 10 },
  { id: 'customer', name: 'Customer Support', icon: Users, notifications: 13 }
];

export function ChannelList() {
  const { activeChannel, setActiveChannel } = useNavigation();

  return (
    <div className="space-y-1">
      <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
        Channels
      </h3>
      {channels.map((channel) => (
        <button
          key={channel.id}
          onClick={() => setActiveChannel(channel.id)}
          className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg ${
            channel.id === activeChannel
              ? 'bg-indigo-50 text-indigo-600'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <div className="flex items-center space-x-3">
            <channel.icon className="w-4 h-4" />
            <span>{channel.name}</span>
          </div>
          {channel.notifications && (
            <span className="text-xs text-indigo-600">+{channel.notifications}</span>
          )}
        </button>
      ))}
    </div>
  );
}