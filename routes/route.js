const express = require('express')

const route = express.Router()
const getUserFromGitHub = require('../services/gibhubApi')
const userApi = require('../services/userApi')

route.post('/get', async (req, res) => {
  const users = await getUserFromGitHub(req.body.userName)
  if (!users.message) {
    res.status(200).send(users)
  } else res.status(404).send('error')
})

route.post('/save', async (req, res) => {
  const users = await userApi.saveUserTodb(req.body)
  // console.log(users)
  if (users) res.status(200).send(users)
  else res.status(404).send('error')
})
route.post('/search', async (req, res) => {
  const users = await userApi.getUserFromdb(req.body.userName)
  if (users) return res.status(200).send(users)
  return res.status(404).send('error')
})

route.post('/insert', async (req, res) => {
  const users = await userApi.insertUserIntodb(req.body)
  if (users) res.status(200).send(users)
  else res.status(404).send('error')
})

module.exports = route
