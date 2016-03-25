'use strict';

import React from 'react';

const NotesList = ({ notes }) => {
  return (
    <ul className="list-group">
      { notes.map((note, idx) => <li className="list-group-item" key={idx}> {note} </li>) }
    </ul>
  )

}

NotesList.propTypes = {
  notes: React.PropTypes.array.isRequired
}

export default NotesList;
