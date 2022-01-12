/* eslint-disable no-console */
const mongoose = require('mongoose')

require('dotenv').config()

const connection = mongoose
  .connect(process.env.DB_USER, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to db')
  })
  .catch((err) => {
    console.log(err)
  })

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  followers: {
    type: Number,
    required: true,
  },
  following: {
    type: Number,
    required: true,
  },
  numberOfRepos: {
    type: Number,
    required: true,
  },
  memberSince: {
    type: Date,
    required: true,
  },
  html_url: {
    type: String,
    required: true,
  },
})

const User = mongoose.model('github', UserSchema)

module.exports = { connection, UserSchema, User }
