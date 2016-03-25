'use strict';

import React from 'react';

const Mixin = InnerComponent => class extends React.Component {
  constructor () {
    super();
    this.update = this.update.bind(this);
    this.state = { val: 0 };
  }

  update () {
    this.setState({ val: ++this.state.val });
  }

  componentWillMount () {
    console.log('component will mount');
  }

  render () {
    return <InnerComponent
      update={this.update}
      {...this.state}
      {...this.props} />
  }

  componentDidMount () {
    console.log('component did mount');
  }

  componentWillReceiveProps (nextProps) {
    console.log(`component will receive props: ${nextProps}`);
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log(`should component update? nextProps: ${nextProps}, nextState: ${nextState}`);
    return true;
  }

  componentWillUpdate (nextProps, nextState) {
    console.log(`component will update - nextProps: ${nextProps}, nextState: ${nextState}`);
  }

  componentDidUpdate (prevProps, prevState) {
    console.log(`component did update - prevProps: ${prevProps}, prevState: ${prevState}`);
  }

  componentWillUnmount () {
    console.log('component will unmount');
  }

}

export default Mixin;
