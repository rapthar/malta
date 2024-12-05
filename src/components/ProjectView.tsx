import React from 'react';
import { useNavigation } from '../hooks/useNavigation';
import { KanbanBoard } from './KanbanBoard';
import { ChatPanel } from './ChatPanel';

export function ProjectView() {
  const { activeProject } = useNavigation();

  return (
    <div className="flex-1 flex overflow-hidden">
      <KanbanBoard />
      <div className="w-96 border-l border-gray-200">
        <ChatPanel />
      </div>
    </div>
  );
}