import React from 'react';
import { useNavigation } from '../hooks/useNavigation';
import type { Project } from '../types';

const projects: Project[] = [
  { id: 'zeeker', name: 'Zeeker Project', icon: '🏆' },
  { id: 'micoory', name: 'Micoory_X Project', icon: '🎯' },
  { id: 'slash', name: 'Slash Motion Project', icon: '🎨' },
  { id: 'diagramma', name: 'Diagramma Project', icon: '📊' }
];

export function ProjectList() {
  const { activeProject, setActiveProject } = useNavigation();

  return (
    <div className="space-y-1">
      {projects.map((project) => (
        <button
          key={project.id}
          onClick={() => setActiveProject(project.id)}
          className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg ${
            project.id === activeProject
              ? 'bg-indigo-50 text-indigo-600'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <div className="flex items-center space-x-3">
            <span className="text-xl">{project.icon}</span>
            <span>{project.name}</span>
          </div>
          {project.notifications && (
            <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded-full text-xs">
              {project.notifications}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}