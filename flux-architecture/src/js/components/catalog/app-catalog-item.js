'use strict';

import React from 'react';
import AppActions from '../../actions/app-actions';
import CartButton from '../cart/app-cart-button';
import {Link} from 'react-router';

export default ({item}) => {
  return (
    <div className="col-xs-6 col-sm-4 col-md-3">
      <h4>{item.title}</h4>
      <img src="http://placehold.it/250x250" width="100%" className="img-responsive" />
      <p>{item.summary}</p>
      <p>${item.cost} <span className="text-success">{item.qty && `(${item.qty} in cart)`}</span></p>
      <div className="btb-group">
        <Link to={`/item/${item.id}`} className="btn btn-default btn-sm">Learn More</Link>
        <CartButton handler={AppActions.addItem.bind(null, item)} txt="Add To Cart" />
      </div>
    </div>
  )
}
