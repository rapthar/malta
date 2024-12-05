import { create } from 'zustand';

interface DarkModeState {
  isDark: boolean;
  toggle: () => void;
}

export const useDarkMode = create<DarkModeState>((set) => ({
  isDark: false,
  toggle: () => set((state) => ({ isDark: !state.isDark })),
}));