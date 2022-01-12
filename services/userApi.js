const { User } = require('../model/db')

async function getUserFromdb(userName) {
  const data = await User.findOne({ userName })
  return data
}

async function insertUserIntodb(userObj) {
  const data = await User.insertMany(userObj)
  // console.log(data)
  return data
}
module.exports = { getUserFromdb, insertUserIntodb }
