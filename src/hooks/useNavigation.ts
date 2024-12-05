import { create } from 'zustand';

interface NavigationState {
  activeSection: string;
  activeProject: string;
  activeChannel: string;
  setActiveSection: (section: string) => void;
  setActiveProject: (project: string) => void;
  setActiveChannel: (channel: string) => void;
  clearActiveChannel: () => void;
}

export const useNavigation = create<NavigationState>((set) => ({
  activeSection: 'dashboard',
  activeProject: 'zeeker',
  activeChannel: '',
  setActiveSection: (section) => set({ activeSection: section, activeChannel: '' }),
  setActiveProject: (project) => set({ activeProject: project, activeChannel: '' }),
  setActiveChannel: (channel) => set({ activeChannel: channel }),
  clearActiveChannel: () => set({ activeChannel: '' })
}));