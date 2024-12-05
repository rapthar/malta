import React from 'react';
import { Phone, Video, Search, Grid } from 'lucide-react';

export function ProjectHeader() {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-dark-700 bg-white dark:bg-dark-800">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <span className="text-xl">🏆</span>
          <h1 className="text-lg font-medium text-gray-900 dark:text-white">Zeeker Project</h1>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 text-gray-400 dark:text-dark-400 hover:text-gray-600 dark:hover:text-dark-200 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700">
            <Phone className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-400 dark:text-dark-400 hover:text-gray-600 dark:hover:text-dark-200 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700">
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
            className="pl-10 pr-4 py-2 bg-gray-50 dark:bg-dark-700 rounded-lg text-sm focus:outline-none w-64 dark:text-dark-200 dark:placeholder-dark-400"
          />
        </div>
        <button className="p-2 text-gray-400 dark:text-dark-400 hover:text-gray-600 dark:hover:text-dark-200 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700">
          <Grid className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}