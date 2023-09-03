const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/goodbye", (req, res) => {
    res.send("<h1>Hello new World</h1>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})