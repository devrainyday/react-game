import React from 'react';

// 버튼을 렌더링한다
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
  }

  handleButtonClick = (e) => { // onClick={ () => this.setState({ value: 'X' }) }
    this.setState({ value: 'X' });
  };

  render() {
    return (
      <button className="square" onClick={this.handleButtonClick}>
        {this.state.value}
      </button>
    );
  }
}

export default Square;
