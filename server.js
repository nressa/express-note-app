import { notes } from './data.js';
import express from 'express';

const app = express()

app.set("view engine", "ejs") // Command express to use EJS for rendering view template

app.get('/', function(req, res) {
    res.render("index.ejs", {
        numberOfIterations: 10,
        isDeleted: false,
        isAvailable: true,
        title: "Lean Express JS"
    }); // This will automatically look at the views folder
});

app.get('/notes', function(req, res) {
    res.render("notes/index.ejs", {
        notes
    });
})

app.get('/notes/:id', function(req, res) {
    const id = +req.params.id
    const note = notes.find(note => note.id === id)

    if (!note) {
        res.status(404).render("errors/404.ejs")

        return
    }

    res.render("notes/show.ejs", {
        note
    });
})

app.get('/about', function(req, res) {
    res.sendFile(__dirname + "/public/about.html");
});

app.use(express.static("public"))

const port = 8080

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})