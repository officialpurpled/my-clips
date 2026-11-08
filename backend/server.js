const express = require('express')

const app = express()
const port = 3000

app.use(cors[
  'https://clipboard.github.io'
])

app.get('/', (req, res) => {
  res.json('Hello world, Welcome to my clipboard')
})

app.listen((port) => {
  console.log('Sever is active on port', port)
})