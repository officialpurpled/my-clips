require('dotenv').config()

const express = require('express')
const cors = require('cors');

const port = process.env.PORT

const app = express()

app.use(cors([
  'http://localhost:5173/',
  'https://officialpurpled.github.io/',
  'https://my-clips-bv0b.onrender.com/'
]))

app.use(express.json());

app.get('/', (req, res) => {
  res.json('Hello world, Welcome to my clipboard')
})

app.use('/api/v1', require('./routes/clipboard.route'))

app.use('', (req, res) => {
  res.json('hello, comot for here')
})

app.listen(port, () => {
  console.log('Sever is active on port', port, ', Link: http://localhost:3000')
})