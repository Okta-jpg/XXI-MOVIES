import React, { useEffect, useState } from 'react';
import { getMovieDetails, getMovieList } from "../api";

const BASEIMGURL = 'https://image.tmdb.org/t/p/w500';

const Popular = () => {
  const [popularMovies, setPopularMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="Movie-Wrapper" key={i} onClick={() => handleMovieClick(movie.id)}>
          <div className="Movie-Title">{movie.title}</div>
          <img className="Movie-Image" src={`${BASEIMGURL}/${movie.poster_path}`} alt={movie.title} />
          <div className="Movie-Date">Release Date: {movie.release_date}</div>
          <div className="Movie-Rate">{movie.vote_average}</div>
        </div>
      );
    });
  };

  const handleMovieClick = async (movieId) => {
    const details = await getMovieDetails(movieId);
    setSelectedMovie(details);
  };

  const MovieDetails = ({ movie, onClose }) => {
    if (!movie) return null;
    return (
      <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>{movie.title}</h2>
        <img src={`${BASEIMGURL}/${movie.poster_path}`} alt={movie.title} />
        <p className='Detail-Syno'><strong>Synopsis:</strong> {movie.overview}</p>
        <p className='Detail-Director'><strong>Director:</strong> {movie.director}</p>
        <p className='Detail-Cast'><strong>Cast:</strong> {movie.cast.join(', ')}</p>
      </div>
    </div>
    );
  };


  return (
      <div>
        <div className='judul'>POPULAR MOVIES
      <div className="Movie-Container">
        <PopularMovieList />
      </div>
      </div>
      {selectedMovie && (
        <MovieDetails 
          movie={selectedMovie} 
          onClose={() => setSelectedMovie(null)} 
        />
      )}
      </div>
  );
};

export default Popular;