'use strict';

import React from 'react';

export default ({handler, txt}) => {
  return (
    <button className="btn btn-default btn-sm" onClick={handler}>{txt}</button>
  );
}
