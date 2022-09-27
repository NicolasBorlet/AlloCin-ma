require('dotenv').config({path:".env"})

const myFetch = (path) => {
    return new Promise( (resolve, reject) => {
        fetch("https://api.themoviedb.org/3" + path + "?api_key=" + process.env.APP_CLE_API + "&query=Jack+Reacher")
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(e => reject(e))
    }) 
}

myFetch("/search/movie")
    .then(data=> {
        console.log('res',data)
    })
