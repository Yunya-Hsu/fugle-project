require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.SERVER_PORT || 3000
const router = require('./routes/index')

app.use(router)

app.use('/', (req, res) => {
  return res.status(404).json({ error: 'page not find' })
})

app.use((err, req, res, next) => {
  console.log(err)
  return res.status(500).json({ error: 'server error' })
})

app.listen(port, () => {
  console.log(`server is listen on ${port}`)
})
