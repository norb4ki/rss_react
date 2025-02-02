import { Component } from 'react';

class ErrorButton extends Component {
  handleClick = () => {
    throw new Error('This is a test error!');
  };

  render() {
    return <button onClick={this.handleClick}>Throw Error</button>;
  }
}

export default ErrorButton;
