const api_key = 'a5cc7523a5515f4432b49b944561b404'

const api_acces_token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWNjNzUyM2E1NTE1ZjQ0MzJiNDliOTQ0NTYxYjQwNCIsIm5iZiI6MTcyNjc1MDU1OS4yMDI0OTksInN1YiI6IjY2ZWMxY2Q5NjJjNGJiMThjOTc0OWU3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yHAbFShr8NTsMQgwxNf-tGVaES9VfCZ-VJVqRQu2Vy0'

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${api_acces_token}`,
    }
};

const apiLinkNowPlaying = 'now_playing'
const apiLinkPopular = 'popular'
const apiLinkTopRated = 'top_rated'
const apiLinkUpcoming = 'upcoming'

fetchCategory(apiLinkNowPlaying)

document.querySelector('#nowPlaying').addEventListener('click', ()=>{
    document.querySelector('#movieList').removeChild()
    fetchCategory(apiLinkNowPlaying)
    console.log('hey')
})
document.querySelector('#popular').addEventListener('click', ()=>{
    document.querySelector('#movieList').removeChild()
    fetchCategory(apiLinkPopular)
    console.log('hey')
})
document.querySelector('#topRated').addEventListener('click', ()=>{
    document.querySelector('#movieList').removeChild()
    fetchCategory(apiLinkTopRated)
    console.log('hey')
})
document.querySelector('#upcoming').addEventListener('click', ()=>{
    document.querySelector('#movieList').removeChild()
    fetchCategory(apiLinkUpcoming)
    console.log('hey')
})

function fetchCategory(category){
    fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => getMovies(response))
    .catch(err => console.error(err));
}

function getMovies(movies){
    console.log(movies)
    movies.results.forEach(movie => {
        const template = document.querySelector('#movieTemplate').content.cloneNode(true);
        
        template.querySelector('.title').textContent = movie.title;
        template.querySelector('.poster_path').src = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
        template.querySelector('.overview').textContent = movie.overview;
        template.querySelector('.original_title').textContent = movie.original_title;
        template.querySelector('.release_date').textContent = movie.release_date;
        
        document.querySelector('#movieList').appendChild(template);
    });
}





//Now playing

/* fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
.then(response => response.json())
.then(response => getMovies(response))
.catch(err => console.error(err)); */

/* //Popular

fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

//Top Rated

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

//Upcoming

fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err)); */


/* 
results: [
    {
        audult: boolean,
        backdrop_path: string,
        genre_ids: [
            number,
        ],
        id: number,
        original_language: string,
        original_title: string,
        overview: string,
        popularity: number
        poster_path: string,
        release_date: string,
        title: string,
        video: boolean,
        vote_average: number,
        vote_count: number
    }
]

*/