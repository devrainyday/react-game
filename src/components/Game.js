import React from 'react';
import Board from './Board';

// 게임판을 렌더링하며 나중에 수정할 자리 표시자 값을 가지고 있다.
class Game extends React.Component {
  render() {
    return (
      <Board />
    );
  }
}

export default Game;
