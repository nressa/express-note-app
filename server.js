import { getNotes, getNote, addNote } from './database.js';
import express from 'express';

const app = express()
const error404 = 'errors/404'

app.set("view engine", "ejs") // Command express to use EJS for rendering view template

app.use(express.urlencoded({extended: true}))

app.get('/', function(req, res) {
    res.render("index", {
        numberOfIterations: 10,
        isDeleted: false,
        isAvailable: true,
        title: "Lean Express JS"
    }); // This will automatically look at the views folder
});

app.get('/notes', function(req, res) {
    res.render("notes/index", {
        notes : getNotes()
    });
})

app.get('/notes/:id', function(req, res) {
    const idParam = req.params.id

    if (idParam === 'create') {
        res.render("notes/create");
        return
    }

    const id = +idParam
    const note = getNote(id)

    if (!note) {
        res.redirect('/error-404')
        return
    }

    res.render("notes/show", {
        note
    });
})

app.post('/notes', function(req, res) {
    const body = req.body
    addNote(body)
    res.redirect('/notes')
})

app.use(express.static("public"))

app.get('*', function(req, res){
    res.status(404).render(error404);
});

app.get('/error-404', function(req, res){
    res.status(404).render(error404);
});

const port = 8080

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})