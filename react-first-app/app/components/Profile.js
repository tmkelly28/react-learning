'use strict';

import React from 'react';
import Router from 'react-router';
import Rebase from 're-base';

// import Firebase from 'firebase';

import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
import getGithubInfo from '../utils/helpers';

const base = Rebase.createClass('https://tmkelly-githubnotes.firebaseio.com/')

class Profile extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      notes: [],
      bio: {},
      repos: []
    }
    this.init = this.init.bind(this);
    this.handleAddNote = this.handleAddNote.bind(this);
  }

  componentDidMount () {
    // this.ref = new Firebase('https://tmkelly-githubnotes.firebaseio.com/');
    this.init(this.props.params.username);
  }

  componentWillUnmount () {
    // this.unbind('notes');
    base.removeBinding(this.ref);
  }

  componentWillReceiveProps (nextProps) {
    // this.unbind('notes');
    base.removeBinding(this.ref);
    this.init(nextProps.params.username);
  }

  init (username) {
    // let childRef = this.ref.child(username);
    // this.bindAsArray(childRef, 'notes');

    this.ref = base.bindToState(username, {
      context: this,
      asArray: true,
      state: 'notes'
    });

    getGithubInfo(username)
      .then(data => this.setState({
        bio: data.bio,
        repos: data.repos
      }));
  }

  handleAddNote (newNote) {
    // this.ref
    //   .child(this.props.params.username)
    //   .child(this.state.notes.length)
    //   .set(newNote)
    base.post(this.props.params.username, {
      data: this.state.notes.concat([newNote])
    });
  }

  render () {
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes
            username={this.props.params.username}
            addNote={this.handleAddNote}
            notes={this.state.notes} />
        </div>
      </div>
    );
  }

}

export default Profile;
