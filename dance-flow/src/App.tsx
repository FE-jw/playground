import { useState } from 'react';
import Board from './components/Board';
import styled from 'styled-components';
import { DancerCiecleProps } from './types/common';

const GRID_SIZE = 10;
const CELL_SIZE = 10;

export default function App() {
  const [circles, setCircles] = useState<DancerCiecleProps[]>([
    { x: 1, y: 1, color: '#3116D8', img: 'https://placehold.co/100/000/ff0.jpg?text=1' },
    { x: 5, y: 7, color: '#DB4654', img: 'https://placehold.co/100/000/ff0.jpg?text=2' }
  ]);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const handleCircleClick = (e: React.MouseEvent<SVGCircleElement>, idx: number) => {
    e.stopPropagation();
    setSelectedIdx(idx);
  };

  const handleBoardClick = (e: React.MouseEvent<SVGSVGElement>) => {
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const scaleX = svg.viewBox.baseVal.width / rect.width;
    const scaleY = svg.viewBox.baseVal.height / rect.height;
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;
    const gridX = Math.floor(x / CELL_SIZE);
    const gridY = Math.floor(y / CELL_SIZE);

    if (selectedIdx !== null) {
      setCircles(prev => prev.map((circle, i) => (i === selectedIdx ? { ...circle, x: gridX, y: gridY } : circle)));
    }

    setSelectedIdx(null);
  };

  return (
    <StyledWrap className="wrap">
      <Board gridSize={GRID_SIZE} cellSize={CELL_SIZE} onClick={handleBoardClick}>
        {circles.map((circle, idx) => (
          <StyledDancer
            key={idx}
            cx={circle.x * CELL_SIZE + CELL_SIZE / 2}
            cy={circle.y * CELL_SIZE + CELL_SIZE / 2}
            r={CELL_SIZE / 3}
            fill={circle.color}
            className={`${selectedIdx === idx ? 'selected' : ''}`}
            onClick={e => handleCircleClick(e, idx)}
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
  transition:
    opacity 0.1s,
    cx 0.2s,
    cy 0.2s;

  &.selected {
    opacity: 0.3;
  }
`;
