require("dotenv").config({ path: "../.env"});

fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=" + process.env.APP_CLE_API)
    .then(res => res.json())
    .then ( data => {
        const genre=('res', data.genres.map(g => g.name))
        const listGenre=genre.map(element => {
            return element
        })
        const div = document.createElement("div");

        document.getElementById("demo").innerHTML = JSON.stringify(listGenre);
        //document.getElementById("main").appendChild(div).innerHTML = JSON.stringify(listGenre);
    })
