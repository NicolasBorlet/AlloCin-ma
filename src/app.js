require('dotenv').config({path:".env"})

const MovieListing = (path) => {
    return new Promise( (resolve, reject) => {
        fetch("https://api.themoviedb.org/3" + path + "?api_key=" + process.env.APP_CLE_API + "&query=Jack+Reacher")
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(e => reject(e))
    }) 
}

MovieListing("/search/movie")
    .then(data=> {
        const genre=('res', data.results.map(g => g.name))
        const listGenre=genre.map(element => {
            return element
        })
        
        listGenre.forEach(element => {
        
        const containerDOM = document.createElement('div');
        containerDOM.setAttribute('class', "container");

        const containerInfoDOM = document.createElement('div');
        containerInfoDOM.setAttribute('class', "container-info");

        const container = document.querySelector('.block-container');
        container.appendChild(containerDOM);
        })
    })
