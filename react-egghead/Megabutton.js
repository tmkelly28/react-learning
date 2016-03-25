import React from 'react';
import ReactDOM from 'react-dom';

class Megabutton extends React.Component {

  constructor () {
    super();
    this.state = { val: 0 };
    this.update = this.update.bind(this);
  }

  update () {
    this.setState({ val: ++this.state.val })
  }

  componentWillMount () {
    this.setState({ m: 2 });
  }

  render () {
    return (
      <button onClick={ this.update }>
        { this.state.val * this.state.m }
      </button>
    );
  }

  componentDidMount () {
    this.inc = setInterval(this.update, 500);
  }

  componentWillUnmount () {
    clearInterval(this.inc);
  }

}

export default Megabutton;
