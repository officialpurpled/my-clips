const express = require('express')

const app = express()
const cors = require('cors');

const router = require('./routes/clipboard.route')
const port = 3000

app.use(cors([
  'http://localhost:5173/',
  'https://officialpurpled.github.io/'
]))

app.get('/', (req, res) => {
  res.json('Hello world, Welcome to my clipboard')
})

app.use('/api/v1', router)

app.use('', (req, res) => {
  res.json('hello, comot for here')
})

app.listen(port, () => {
  console.log('Sever is active on port', port, 'http://localhost:3000')
})