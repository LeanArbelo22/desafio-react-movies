import React from 'react';
import MovieCard from './MovieCard';
import '../styles/home.css';

function MoviesContainer({ movies }) {

  return (
    <div className="movies-container">
      <div className="movies">
        {movies.map((movie, index) => {
          return (
            
              <MovieCard
                key={movie.id + index}
                id={movie.id}
                image={movie.image}
                title={movie.title}
                year={movie.year}
                votes={movie.votes}
              />
            
          )
        })}
      </div>
    </div>
  )
}

export default MoviesContainer;