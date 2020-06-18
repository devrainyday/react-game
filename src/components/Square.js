import React from 'react';

// 버튼을 렌더링한다
function Square(props) {
  // -> Square는 게임의 상태를 유지할 필요가 없으므로 constructor()를 지운다.
  // -> this.state.value를 props.value로 바꾼다.
  // -> this.setState()를 props.onClick()으로 바꾼다.
  return ( // () => this.props.onClick() 에서 props.onClick 로
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;
