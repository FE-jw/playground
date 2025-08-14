import { useState } from 'react';
import Board from './components/Board';
import styled from 'styled-components';

const GRID_SIZE = 10;
const CELL_SIZE = 10;

export default function App() {
  const circles = [
    { x: 1, y: 1, color: 'orange' },
    { x: 5, y: 7, color: '#d33' }
  ];
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const handleChange = (idx: number) => {
    setSelectedIdx(idx);
  };

  return (
    <StyledWrap className="wrap">
      <Board gridSize={GRID_SIZE} cellSize={CELL_SIZE}>
        {circles.map((circle, idx) => (
          <StyledDancer
            key={idx}
            cx={circle.x * CELL_SIZE + CELL_SIZE / 2}
            cy={circle.y * CELL_SIZE + CELL_SIZE / 2}
            r={CELL_SIZE / 3}
            fill={circle.color}
            className={`${selectedIdx === idx ? 'selected' : ''}`}
            onClick={() => handleChange(idx)}
          />
        ))}
      </Board>
    </StyledWrap>
  );
}

const StyledWrap = styled.div`
  max-width: 720px;
  margin: 0 auto;
  border: 1px solid var(--border-color);
`;

const StyledDancer = styled.circle`
  cursor: pointer;

  &.selected {
    opacity: 0.3;
  }
`;
