import axios from "axios";

const apiKey = '07143bff28fd0a4d60caa015f9797de8';
const baseURL = 'https://api.themoviedb.org/3';

export const getMovieList = async() => {
   const movie = await axios.get(`${baseURL}/movie/popular?page=1&api_key=${apiKey}`)
   return movie.data.results
}

export const getNowPlaying = async() => {
   const movie = await axios.get(`${baseURL}/movie/now_playing?page=1&api_key=${apiKey}`)
   return movie.data.results
}

export const getTopRated = async() => {
   const movie = await axios.get(`${baseURL}/movie/top_rated?page=1&api_key=${apiKey}`)
   return movie.data.results
}

export const getUpComing = async() => {
   const movie = await axios.get(`${baseURL}/movie/upcoming?page=1&api_key=${apiKey}`)
   return movie.data.results
}


export const searchMovie = async(q) => {
    const search = await axios.get(`${baseURL}/search/movie?query=${q}&api_key=${apiKey}`)
    return search.data
 }

 export const getMovieDetails = async (movieId) => {
   const details = await axios.get(`${baseURL}/movie/${movieId}?api_key=${apiKey}&append_to_response=credits`);
   const director = details.data.credits.crew.find(person => person.job === 'Director');
   const cast = details.data.credits.cast.slice(0, 5).map(actor => actor.name);
   return {
     ...details.data,
     director: director ? director.name : 'Not available',
     cast
   };
 };
