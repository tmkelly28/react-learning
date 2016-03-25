'use strict';

import React from 'react';

class SearchGithub extends React.Component {

  constructor (props) {
    super();
    console.log(props)
    this.getRef = this.getRef.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.history = props.history;
  }

  getRef (ref) {
    this.usernameRef = ref;
  }

  handleSubmit () {
    let username = this.usernameRef.value;
    this.usernameRef.value = '';
    this.history.push(null, `/profile/${username}`);
  }

  render () {
    return (
      <div className="col-sm-12">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref={this.getRef} />
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary">Search Github</button>
          </div>
        </form>
      </div>
    );
  }

}

SearchGithub.propTypes = {
  history: React.PropTypes.object.isRequired
}

export default SearchGithub;
