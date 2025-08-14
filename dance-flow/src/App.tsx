import Board from './components/Board';

export default function App() {
  const GRID_SIZE = 10;
  const CELL_SIZE = 10;
  const circles = [
    { x: 1, y: 1, color: 'orange' },
    { x: 5, y: 7, color: '#d33' }
  ];

  return (
    <div className="wrap">
      <Board gridSize={GRID_SIZE} cellSize={CELL_SIZE}>
        {circles.map((c, idx) => (
          <circle
            key={idx}
            cx={c.x * CELL_SIZE + CELL_SIZE / 2}
            cy={c.y * CELL_SIZE + CELL_SIZE / 2}
            r={CELL_SIZE / 3}
            fill={c.color}
            className="board-dancer"
          />
        ))}
      </Board>
    </div>
  );
}
