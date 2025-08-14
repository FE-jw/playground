import { Fragment } from 'react';

interface BoardProps {
  gridSize?: number;
  cellSize?: number;
  children?: React.ReactNode;
}

export default function Board({ gridSize = 10, cellSize = 40, children }: BoardProps) {
  return (
    <svg
      width={gridSize * cellSize}
      height={gridSize * cellSize}
      viewBox={`0 0 ${gridSize * cellSize} ${gridSize * cellSize}`}
      className="board"
    >
      {/* 바둑판 그리드 */}
      {Array.from({ length: gridSize + 1 }).map((_, i) => (
        <Fragment key={i}>
          {/* 세로선 */}
          <line className="board-line" x1={i * cellSize} y1={0} x2={i * cellSize} y2={gridSize * cellSize} />
          {/* 가로선 */}
          <line className="board-line" x1={0} y1={i * cellSize} x2={gridSize * cellSize} y2={i * cellSize} />
        </Fragment>
      ))}
      {children}
    </svg>
  );
}
