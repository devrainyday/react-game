import React from 'react';
import Square from './Square';

// 사각형 9개를 렌더링한다
class Board extends React.Component {
  render() {
    const status = "Next player: X";
    const squares = Array(9).fill(null);
    squares.forEach((elem, index) => {
      squares[index] = <Square key={index} value={index} />
    });
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {squares[0]}
          {squares[1]}
          {squares[2]}
        </div>
        <div className="board-row">
          {squares[3]}
          {squares[4]}
          {squares[5]}
        </div>
        <div className="board-row">
          {squares[6]}
          {squares[7]}
          {squares[8]}
        </div>
      </div>
    )
  }
}

export default Board;
