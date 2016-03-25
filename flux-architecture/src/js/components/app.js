'use strict';

import React from 'react';
import Catalog from '../components/catalog/app-catalog';
import Cart from '../components/cart/app-cart';
import CatalogDetail from './product/app-catalog-detail';
import Template from './app-template';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

export default () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Template}>
        <IndexRoute component={Catalog}></IndexRoute>
        <Route path="cart" component={Cart} />
        <Route path="item/:item" component={CatalogDetail} />
      </Route>
    </Router>
  );
}
