import React from 'react';
import { PlusCircle } from 'lucide-react';
import type { Column, Task } from '../types';

const initialColumns: Column[] = [
  {
    id: 'todo',
    title: 'To Do',
    tasks: [
      {
        id: '1',
        title: 'Design new landing page',
        description: 'Create a modern landing page for the product launch',
        dueDate: new Date('2024-03-20'),
        priority: 'high',
        status: 'todo',
        assignees: ['1'],
        tags: ['design', 'marketing'],
        attachments: [],
      },
    ],
  },
  {
    id: 'in-progress',
    title: 'In Progress',
    tasks: [],
  },
  {
    id: 'done',
    title: 'Done',
    tasks: [],
  },
];

export function KanbanBoard() {
  return (
    <div className="flex-1 overflow-x-auto">
      <div className="flex gap-6 p-6 min-w-max">
        {initialColumns.map((column) => (
          <div
            key={column.id}
            className="w-80 bg-gray-50 rounded-lg p-4"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-900">{column.title}</h3>
              <span className="text-sm text-gray-500">{column.tasks.length}</span>
            </div>

            <div className="space-y-3">
              {column.tasks.map((task) => (
                <div
                  key={task.id}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
                >
                  <h4 className="font-medium text-gray-900">{task.title}</h4>
                  <p className="text-sm text-gray-500 mt-1">{task.description}</p>
                  <div className="flex items-center mt-3">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      task.priority === 'high'
                        ? 'bg-red-100 text-red-700'
                        : task.priority === 'medium'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {task.priority}
                    </span>
                  </div>
                </div>
              ))}
              
              <button className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-gray-400 hover:text-gray-600 flex items-center justify-center">
                <PlusCircle className="w-5 h-5 mr-2" />
                Add Task
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}