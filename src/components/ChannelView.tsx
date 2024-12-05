import React from 'react';
import { useNavigation } from '../hooks/useNavigation';

export function ChannelView() {
  const { activeChannel } = useNavigation();
  const channels = {
    design: 'Design & Branding',
    payment: 'Payment Workers',
    support: 'Tech Support',
    sales: 'Sales & Marketing',
    customer: 'Customer Support'
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        {channels[activeChannel as keyof typeof channels]}
      </h2>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600">Channel content will be displayed here.</p>
      </div>
    </div>
  );
}