require("dotenv").config({ path: "../.env"});

fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=" + process.env.APP_CLE_API)
    .then(res => res.json())
    .then ( data => {
        const genre=('res', data.genres.map(g => g.name))
        const listGenre=genre.map(element => {
            return element
        })
        const div = document.createElement("div");
        listGenre.forEach(element => { 
        });
    })
