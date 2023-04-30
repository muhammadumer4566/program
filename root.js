const express = require('express')
const app = express()
const port = 3000

app.get('/about-req', (req, res) => {
  res.send('About reqesut')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})              