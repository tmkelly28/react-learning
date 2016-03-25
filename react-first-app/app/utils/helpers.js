'use strict';

import axios from 'axios';

const api = 'https://api.github.com/users'

function getRepos (username) {
  return axios.get(`${api}/${username}/repos`);
}

function getUserInfo (username) {
  return axios.get(`${api}/${username}`)
}

export default function getGithubInfo (username) {
  return axios.all([getRepos(username), getUserInfo(username)])
    .then(resArr => ({repos: resArr[0].data, bio: resArr[1].data}))
}
