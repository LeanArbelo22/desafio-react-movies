import React, { useEffect } from 'react';
import axios from 'axios';
import { BiSearchAlt } from 'react-icons/bi';
import '../styles/home.css';

function Search({ setSearchedMovies, inputValue, setInputValue }) {
  
  // Fetch a la API 'search'
  useEffect(() => {
    const fetchSearch = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1a7b5db8f3f0ebde0c9c6aeaad2597bf&language=es-ES&query=${inputValue}&page=1&include_adult=false`);
      const { results } = response.data;
      const card = results.map(movie => {
        return {
          id: movie.id,
          title: movie.title,
          description: movie.overview,
          image: "https://image.tmdb.org/t/p/original" + movie.poster_path,
          votes: movie.vote_average,
          backdrop: "https://image.tmdb.org/t/p/original" + movie.backdrop_path,
          date: movie.release_date,
          year: movie.release_date.slice(0, 4)
        }
      });
      setSearchedMovies([...card]);
    };
    fetchSearch();
  }, [inputValue, setSearchedMovies]);

  // Detecta si se escribió en el input
  const handleChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <div className="nav-search">
      <BiSearchAlt className="nav-icon search-icon" />
      <input
        type="search"
        placeholder="Encontra la pelicula que buscas!"
        onChange={handleChange}
      />
    </div>
  )
}

export default Search;