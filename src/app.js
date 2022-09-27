require("dotenv").config({ path: "../.env"});

const CategoriesListing = () => {
    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=" + process.env.APP_CLE_API)
    .then(res => res.json())
    .then ( data => {
        const genre=('res', data.genres.map(g => g.name))
        const listGenre=genre.map(element => {
            return element
        })
        listGenre.forEach(element => {

    //   <div class="container">
    //   <div class="container-info">
    //     <h2>Test</h2>
    //     <p class="film-date">Test</p>
    //     <p class="film-realisateur">Test</p>
    //     <p class="film-acteurs">Test</p>
    //   </div>
    //   <div class="container-img">
    //     <img src="https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg" alt="maxi éléphant"/>
    //   </div>
    // </div>
            console.log(element)

            // ✅ Create element
            const containerDOM = document.createElement('div');
            containerDOM.setAttribute('class', "container");
            
            const containerInfoDOM = document.createElement('div');
            containerInfoDOM.setAttribute('class', "container");


            // ✅ Add text content to element
            // div.textContent = JSON.stringify(listGenre);

            // ✅ Or set the innerHTML of the element

            // ✅ (Optionally) Set Attributes on Element
            // div.setAttribute('title', 'my-title');

            // ✅ (Optionally) Set styles on Element
            // el.style.backgroundColor = 'salmon';
            // el.style.color = 'white';

            // ✅ add element to DOM
            const container = document.querySelector('.block-container');
            container.appendChild(containerDOM);
        });
    })
}

CategoriesListing();