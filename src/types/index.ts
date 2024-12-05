export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  priority: 'low' | 'medium' | 'high';
  status: 'todo' | 'in-progress' | 'done';
  assignees: string[];
  tags: string[];
  attachments: string[];
}

export interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

export interface MenuItem {
  id: string;
  icon: React.ElementType;
  label: string;
}

export interface Project {
  id: string;
  name: string;
  icon: string;
  notifications?: number;
}

export interface Channel {
  id: string;
  name: string;
  icon: React.ElementType;
  notifications?: number;
}