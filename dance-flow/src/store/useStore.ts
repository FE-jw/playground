import { create } from 'zustand';

interface Position {
  time: number;
  x: number;
  y: number;
}

interface Dancer {
  id: number;
  name: string;
  positions: Position[];
}

interface StoreState {
  dancers: Dancer[];
  selectedDancerId: number;
  currentTime: number;
  setSelectedDancerId: (id: number) => void;
  setCurrentTime: (time: number) => void;
  updatePosition: (id: number, time: number, x: number, y: number) => void;
}

const useStore = create<StoreState>(set => ({
  dancers: [
    { id: 1, name: 'Alice', positions: [{ time: 0, x: 50, y: 50 }] },
    { id: 2, name: 'Bob', positions: [{ time: 0, x: 150, y: 50 }] }
  ],
  selectedDancerId: 1,
  currentTime: 0,
  setSelectedDancerId: id => set({ selectedDancerId: id }),
  setCurrentTime: time => set({ currentTime: time }),
  updatePosition: (id, time, x, y) =>
    set(state => ({
      dancers: state.dancers.map(d =>
        d.id === id
          ? {
              ...d,
              positions: [...d.positions.filter(p => p.time !== time), { time, x, y }]
            }
          : d
      )
    }))
}));

export default useStore;
