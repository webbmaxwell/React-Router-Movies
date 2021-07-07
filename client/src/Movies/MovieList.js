import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import MovieCard from './MovieCard.js';

const MovieList = props => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
          // console.log(response);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }

    getMovies();
  }, []);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <NavLink key={movie.id} to={`/movies/${movie.id}`}>
          <MovieCard title={movie.title} director={movie.director} metascore={movie.metascore} stars={movie.stars} />
        </NavLink>
      ))}
    </div>
  );
};

export default MovieList;
