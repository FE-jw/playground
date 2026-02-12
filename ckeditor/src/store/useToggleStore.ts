import { create } from 'zustand';

interface ToggleState {
  isComponentOn: boolean;
  setComponentOn: (on: boolean) => void;
}

export const useToggleStore = create<ToggleState>(set => ({
  isComponentOn: false,
  setComponentOn: on => set({ isComponentOn: on })
}));
