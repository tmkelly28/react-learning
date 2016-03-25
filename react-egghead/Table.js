'use strict';

import React from 'react';
import Row from './Row';

let rows,
  data = [
    {id: 1, name: 'Tom'},
    {id: 2, name: 'Mike'},
    {id: 3, name: 'Dan'},
    {id: 4, name: 'Tiffany'},
    {id: 5, name: 'Ian'},
    {id: 6, name: 'Sam'}
  ]

class Table extends React.Component {

  componentWillMount () {
    rows = data.map(fellow => <Row key={fellow.id} data={fellow} />)
  }

  render () {
    return (
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }

}

export default Table;
