'use strict';

import React from 'react';

const Repos = ({repos}) => {

  let list = repos.map((repo, idx) => {
    return (
      <li className="list-group-item" key={idx}>
        {repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
        {repo.description && <p>{repo.description}</p>}
      </li>
    );
  });

  return (
    <div>
      <h3> User Repos </h3>
      <ul className="list-group">
        {list}
      </ul>
    </div>
  );
}

Repos.propTypes = {
  repos: React.PropTypes.array.isRequired,
  username: React.PropTypes.string.isRequired
}

export default Repos;
