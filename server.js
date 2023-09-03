const express = require('express')
const app = express()

app.set("view engine", "ejs") // Command express to use EJS for rendering view template

app.get('/', function(req, res) {
    res.render("index.ejs", {
        numberOfIterations: 10
    }); // This will automatically look at the views folder
});

app.get('/about', function(req, res) {
    res.sendFile(__dirname + "/public/about.html");
});

app.use(express.static("public"))

const port = 8080

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})