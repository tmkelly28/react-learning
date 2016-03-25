'use strict';

import React from 'react';

const Row = (props) => {
  return (
    <tr>
      <td>{props.data.id}</td>
      <td>{props.data.name}</td>
    </tr>
  );
}

export default Row;
