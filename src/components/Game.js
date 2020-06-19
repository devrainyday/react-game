import React from 'react';
import Board from './Board';

// 게임판을 렌더링하며 나중에 수정할 자리 표시자 값을 가지고 있다.
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        log: 'Start',
      }],
      stepNumber: 0,
      xIsNext: true, // 다음 플레이어 지정
      lastPosition: null,
    };
  }

  handleClick(i) { // onClick={ () => this.setState({ value: 'X' }) } -> State 끌어올리기 위해 지움
    const history = this.state.history.slice(0, this.state.stepNumber + 1); // 만약 과거로 돌아간다면 미래의 기록을 날린다.
    const curr = history[history.length - 1];
    const squares = curr.squares.slice();
    if (calculateWinner(squares) || squares[i]) { // 승부 결과가 null이거나 
      return;
    }
    if (squares[i] !== 'O' && squares[i] !== 'X') { // 모든 칸이 O거나 X면 경기 종료다.
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        history: history.concat([{ // 불변
          squares,
          log: `(${i % 3}, ${Math.floor(i / 3)})`,
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
        lastPosition: i,
      });
    }
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0, // step이 짝수면 X 순서
    })
  }

  render() {
    const history = this.state.history;
    let curr = history[this.state.stepNumber];
    const winner = calculateWinner(curr.squares);
    
    const moves = history.map((_, move) => {
      const desc = move ? `Go to move #${move}` : 'Go to game start';
      return (
        <li key={move}>
          <label>
            {this.state.history[move].log}&nbsp;&nbsp;
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </label>
        </li>
      );
    });

    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={curr.squares}
            onClick={(i) => this.handleClick(i)}
            lastPosition={this.state.lastPosition}
          />
        </div>
        <div className="game-info">
        <div className="status">{status}</div>
          <ol>{moves}</ol>
        </div>
        <div className="status">{history.map(elem => elem.log).join(' -> ')}</div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;

