const express = require('express')
const app = express()

app.use(express.static("public"))

app.get('/about', function(req, res) {
  res.sendFile(__dirname + "/public/about.html");
});

const port = 8080

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})