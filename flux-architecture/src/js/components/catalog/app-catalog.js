'use strict';

import React from 'react';
import AppStore from '../../stores/app-store';
import CatalogItem from './app-catalog-item';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';

function getCatalog () {
  return { items: AppStore.getCatalog() }
}

const Catalog = ({items}) => {
  return (
    <div className="row">
      {items.map(item => <CatalogItem key={item.id} item={item} />)}
    </div>
  );
}

export default StoreWatchMixin(Catalog, getCatalog);
