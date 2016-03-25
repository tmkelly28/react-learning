'use strict';

import React from 'react';

const UserProfile = ({bio}) => {
  return (
    <div>
      <h3> USER PROFILE </h3>
      {bio.avatar_url && <li className="list-group-item" width="50px"><img src={bio.avatar_url} /></li>}
      {bio.name && <li className="list-group-item">Name: {bio.name}</li>}
      {bio.email && <li className="list-group-item">{bio.email}</li>}
    </div>
  )
}

UserProfile.propTypes = {
  username: React.PropTypes.string.isRequired,
  bio: React.PropTypes.object.isRequired
}

export default UserProfile;
