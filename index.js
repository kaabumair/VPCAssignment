const express = require('express');
const res = require('express/lib/response');
const app = express();
const port = 3000;

//parse JSOn using express framework
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
let movies = [
{
    id: "1",
    title: "Hassan Inamdar",
    director: "Chris",
    date: "10-1-2022",
},
{
    id: "2",
    title: "Asna",
    director: "Metthew",
    date: "10-2-2022",
},
];
//Get movies '
app.get("/movie", (req, res) => {
    res.json(movies);
});

//Add movie to the list 
app.post("/movie", (req, res) => {
    const movie = req.body;
    console.log(movie);
    movies.push(movie);
    res.send('Movie is added');

});
//Search for a movie in the list 
app.post("/movie/id:", (req, res) => {
    const id = req.params.id;
    for (let movie of movies){
        if(movie.id === id) {
            req.json(movie);
            return;
        }
    }
    res.status(404).send('Movie not found');
});
app.listen(port, () => console.log('Server is up and running ${port}'));