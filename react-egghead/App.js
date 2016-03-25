'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Megabutton from './Megabutton';
import MixedButton from './Button.js';
import Table from './Table';


// class component
class App extends React.Component {
  constructor () {
    super(); // gives us 'this' context
    this.state = {
        red: 0,
        blue: 0,
        green: 0,
        val: 0
    };
    this.update = this.update.bind(this);
    this.mount = this.mount.bind(this);
    this.unmount = this.unmount.bind(this);
  }

  update (e) {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red).value,
      green: ReactDOM.findDOMNode(this.refs.green).value,
      blue: ReactDOM.findDOMNode(this.refs.blue).value
    });
  }

  // causing a child component to mount
  mount () {
    ReactDOM.render(
      <Megabutton />,
      document.getElementById('mega'));
  }

  // causing a child component to unmount
  unmount () {
    ReactDOM.unmountComponentAtNode(document.getElementById('mega'));
  }

  render () {
    return (
      <div>
        <p>{ this.state.red }</p>
        <Slider ref="red" update={ this.update } />
        <p>{ this.state.blue }</p>
        <Slider ref="blue" update={ this.update } />
        <p>{ this.state.green }</p>
        <Slider ref="green" update={ this.update } />
        <div></div>
        <Button>React</Button>
        <button onClick={this.mount}>Mount</button>
        <button onClick={this.unmount}>Unmount</button>
        <div id="mega"></div>
        <MixedButton text='Mixin' />
        <Table />
      </div>
    );
  }
}

class Button extends React.Component {
  render () {
    return <button>{ this.props.children }</button>
  }
}

class Slider extends React.Component {
  render () {
    return (
      <input type="range"
        min="0"
        max="255"
        onChange={this.props.update} />
    );
  }
}

// assign prop types
App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number
};

// assign default props
App.defaultProps = {
  txt: 'default props',
  cat: 7
};

// stateless function component
// const App = () => <h1>Hello Egghead</h1>

ReactDOM.render(
  <App />,
  document.getElementById('app'));

export default App;
