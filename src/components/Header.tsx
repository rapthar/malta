import React from 'react';
import { Search, Moon, Sun } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

export function Header() {
  const { isDark, toggle } = useDarkMode();

  return (
    <header className="bg-white dark:bg-dark-800 flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-dark-700">
      <nav className="hidden md:flex items-center space-x-6">
        <a href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-dark-400 dark:hover:text-dark-200">Dashboard</a>
        <a href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-dark-400 dark:hover:text-dark-200">Teams</a>
        <a href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-dark-400 dark:hover:text-dark-200">News</a>
        <a href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-dark-400 dark:hover:text-dark-200">Library</a>
        <a href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-dark-400 dark:hover:text-dark-200">Contacts</a>
      </nav>

      <div className="relative flex-1 max-w-lg mx-4 md:mx-12">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-dark-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 bg-white dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-sm focus:outline-none focus:border-indigo-500 dark:text-dark-200 dark:placeholder-dark-400"
        />
      </div>
      
      <div className="hidden sm:flex items-center space-x-4">
        <button
          onClick={toggle}
          className="p-2 text-gray-400 dark:text-dark-400 hover:text-gray-600 dark:hover:text-dark-200 rounded-lg"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Emily Johnson"
          className="w-8 h-8 rounded-full"
        />
        <div className="flex flex-col">
          <span className="text-sm font-medium dark:text-dark-200">Emily Johnson</span>
          <span className="text-xs text-gray-500 dark:text-dark-400">@emily</span>
        </div>
      </div>
    </header>
  );
}