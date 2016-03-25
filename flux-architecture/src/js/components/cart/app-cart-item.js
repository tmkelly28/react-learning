'use strict';

import React from 'react';
import CartButton from './app-cart-button';
import AppActions from '../../actions/app-actions';

export default ({item, subtotal}) => {
  return (
    <tr>
      <td>
        <CartButton txt="x" handler={AppActions.removeItem.bind(null, item)} />
      </td>
      <td>{item.title}</td>
      <td>{item.qty}</td>
      <td>
        <div className="btn-group">
          <CartButton txt="-" handler={AppActions.decreaseItem.bind(null, item)} />
          <CartButton txt="+" handler={AppActions.increaseItem.bind(null, item)} />
        </div>
      </td>
      <td>
        ${subtotal}
      </td>
    </tr>
  );
}
