const http = require('http');

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Alan Wangsgard')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})