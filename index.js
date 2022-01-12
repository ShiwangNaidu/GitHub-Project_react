/* eslint-disable no-console */
const express = require('express')
const cors = require('cors')
const route = require('./routes/route')

require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())
// app.use(express.urlencoded({extended:false}))
app.use('/github', route)
const { PORT } = process.env
app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`)
})
