import { create } from 'zustand';

type CounterState = {
  count: number;
  inc: () => void;
  reset: () => void;
};

export const useDefaultStore = create<CounterState>((set) => ({
  count: 1,
  inc: () => set((s) => ({ count: s.count + 1 })),
  reset: () => set({ count: 1 }),
}));