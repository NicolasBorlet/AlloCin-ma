require("dotenv").config({ path: "../.env"});

fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=" + process.env.APP_CLE_API)
    .then(res => res.json())
    .then ( data => {
        Genre=('res', data.genres.map(g => g.name))

        Genre.forEach(element => {
            console.log(element)
            document.getElementById("demo").innerHTML = element;
        });
    })
