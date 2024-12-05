import React from 'react';
import { Header } from './Header';
import { LeftSidebar } from './LeftSidebar';
import { Sidebar } from './Sidebar';
import { DirectMessages } from './DirectMessages';
import { ChatPanel } from './ChatPanel';
import { ProjectHeader } from './ProjectHeader';
import { useDarkMode } from '../hooks/useDarkMode';

export function Dashboard() {
  const { isDark } = useDarkMode();

  return (
    <div className={`flex h-screen overflow-hidden ${isDark ? 'dark bg-dark-900' : 'bg-gray-50'}`}>
      <div className="hidden md:block">
        <LeftSidebar />
      </div>
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 flex">
          <div className="hidden md:block w-72 border-r border-gray-200 dark:border-dark-700 bg-white dark:bg-dark-800">
            <DirectMessages />
          </div>
          <div className="flex-1 flex flex-col">
            <ProjectHeader />
            <ChatPanel />
          </div>
        </div>
      </div>
    </div>
  );
}