'use strict';

import React from 'react';
import AppStore from '../stores/app-store';


/* This mixin serves kind of a "controller" for the cart and catalog views */
export default (InnerComponent, stateCb) => class extends React.Component {
  constructor (props) {
    super(props);
    this.state = stateCb(props);
    this._onChange = this._onChange.bind(this);
  }
  componentWillMount () {
    AppStore.addChangeListener(this._onChange);
  }
  componentWillUnmount () {
    AppStore.removeChangeListener(this._onChange);
  }
  _onChange () {
    this.setState(stateCb(this.props));
  }

  render () {
    return (
      <InnerComponent {...this.state} {...this.props} />
    );
  }
}
