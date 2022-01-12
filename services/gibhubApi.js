const axios = require('axios')

let userGithubObj = {}
async function getUserFromGitHub(user) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`)
    userGithubObj = {
      userName: response.data.login,
      image: response.data.avatar_url,
      followers: response.data.followers,
      following: response.data.following,
      numberOfRepos: response.data.public_repos,
      memberSince: response.data.created_at,
      html_url: response.data.html_url,
    }
    return userGithubObj
  } catch (error) {
    return error.response.data
  }
}

module.exports = getUserFromGitHub
