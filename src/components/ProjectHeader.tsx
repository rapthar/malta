import React from 'react';
import { Phone, Video, Search, Grid } from 'lucide-react';

export function ProjectHeader() {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <span className="text-xl">🏆</span>
          <h1 className="text-lg font-medium">Zeeker Project</h1>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
            <Phone className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
            <Video className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 bg-gray-50 rounded-lg text-sm focus:outline-none w-64"
          />
        </div>
        <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
          <Grid className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}