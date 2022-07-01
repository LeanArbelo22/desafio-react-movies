import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import '../styles/movie-details.css';

function MovieDetails() {
  // arreglos donde se guardara la data de la pelicula
  const [movie, setMovie] = useState({});
  const [data, setData] = useState([]);
  // arreglo donde se guardaran los nombres de los generos despues de mapearlos
  const [genres, setGenres] = useState([]);
  // id que vincula la pelicula con la API
  const { id } = useParams();

  useEffect(() => {
    // fetch a la API para acceder a cada pelicula individualmente
    const movieFetch = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=1a7b5db8f3f0ebde0c9c6aeaad2597bf&language=es-ES`
      );
      setData(response.data);

      // seteando los generos de la pelicula 
      const genreName = response.data.genres.map(genre => {
        return [genre.name]
      });
      setGenres(genreName);      
    };
    movieFetch();
    setMovie(data);
  }, [id, data]);

  return (
    <div className="movie">
      <Header image={"https://image.tmdb.org/t/p/original" + movie.backdrop_path} />
      <div className="movie-details">
        <div className="movie-container">
          <h1>{movie.title}</h1>
          <div className="movie-description">
            <p className="overview">{movie.overview}</p>
            <div className="info">
              <div className="genres">
                <p>Generos: </p>
                {genres.map((genre, i) => <p key={genre + i} className="genre-name">{genre}</p>)}
              </div>
              <p className="vote">Calificación:   {movie.vote_average / 2} ⭐</p>
              <p className="release">Fecha de lanzamiento: {movie.release_date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails;