import { create } from 'zustand';

type CounterState = {
  count: number;
  setCount: () => void;
  reset: () => void;
};

export const useDefaultStore = create<CounterState>((set) => ({
  count: 1,
  setCount: () => set((s) => ({ count: s.count + 1 })),
  reset: () => set({ count: 1 }),
}));