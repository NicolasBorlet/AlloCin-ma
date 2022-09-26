require("dotenv").config({ path: "../.env"});
KEY = console.log( process.env.APP_CLE_API );

fetch("https://api.themoviedb.org/3/movie/550?api_key=" + process.env.APP_CLE_API)
    .then(res => res.json())
    .then ( data => {
        console.log('res', data)
    })
