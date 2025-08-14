import { Fragment } from 'react';
import styled from 'styled-components';

interface BoardProps {
  gridSize: number;
  cellSize: number;
  children?: React.ReactNode;
  [key: string]: unknown;
}

export default function Board({ gridSize = 10, cellSize = 40, children, ...props }: BoardProps) {
  return (
    <StyledBoard
      width={gridSize * cellSize}
      height={gridSize * cellSize}
      viewBox={`0 0 ${gridSize * cellSize} ${gridSize * cellSize}`}
      {...props}
    >
      {/* 바둑판 그리드 */}
      {Array.from({ length: gridSize + 1 }).map((_, i) => (
        <Fragment key={i}>
          {/* 세로선 */}
          <StyledLine x1={i * cellSize} y1={0} x2={i * cellSize} y2={gridSize * cellSize} />
          {/* 가로선 */}
          <StyledLine x1={0} y1={i * cellSize} x2={gridSize * cellSize} y2={i * cellSize} />
        </Fragment>
      ))}
      {children}
    </StyledBoard>
  );
}

const StyledBoard = styled.svg`
  display: block;
  width: 100%;
  height: auto;
`;

const StyledLine = styled.line`
  stroke: var(--border-color);
  stroke-width: 0.05;
`;
