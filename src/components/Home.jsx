import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Stars from './Stars';
import Scroller from './Scroller';
import Search from './Search';
import '../styles/home.css';

const Titles = ({ text }) => <h1 className="home-titles">{text}</h1>;

function Home() {

    // Arreglo original donde se setearan las peliculas de la API 'discover'
    const [movies, setMovies] = useState([]); 
    // Arreglo con todas las peliculas ó solo con las filtradas por puntuacion
    const [rankedMovies, setRankedMovies] = useState([]); 
    // Boolean para determinar si se cargo la info de la API
    const [isLoading, setIsLoading] = useState(true);
    // Numero de pagina de la API (cambia en componente Scroller)
    const [pageNum, setPageNum] = useState(1);
    // Numero de estrellas que determinara el filtrado (cambia en componente Stars)
    const [stars, setStars] = useState(0);
    // Estado solo para reconocer desde Home si el input de Search esta vacio o no
    const [inputValue, setInputValue] = useState(0);
    // Arreglo de peliculas que matchean con lo que se ingresa en el input de Search (cambia en componente Search)
    const [searchedMovies, setSearchedMovies] = useState([]);

    // Fetch de todas las peliculas de la API 'discover'
    useEffect(() => {
        if (isLoading) {
            const fetching = async () => {
                const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=1a7b5db8f3f0ebde0c9c6aeaad2597bf&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNum}&with_watch_monetization_types=flatrate`);
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
                setMovies(perviousMovies => [...perviousMovies, ...card]);
                setIsLoading(false);
            };
            fetching();
        }
    }, [isLoading, pageNum]);

    /* Si stars es 0, rankedMovies sera igual al arreglo original de movies, de lo contrario, el arreglo
    contendra las peliculas filtradas segun la puntuación */ 
    useEffect(() => {
        if (stars === 0) {
            setRankedMovies([...movies]);
        } else {
            const filtered = movies.filter(movie => {
                return (movie.votes / 2 + 1) >= stars && (movie.votes / 2 + 1) < stars + 1
            });
            setRankedMovies(filtered);
        };
    }, [movies, stars]);

    // Haciendo un poco mas legible las condiciones
    const inputIsNotEmpty = inputValue.length > 0;
    const areMatchedMovies = searchedMovies.length > 0;

    return (
        <div className="home">
            <Header isHome={true} />
            <Search setSearchedMovies={setSearchedMovies} inputValue={inputValue} setInputValue={setInputValue} />

            {
                inputIsNotEmpty
                    ? (<div className="wraper">
                        <Titles text="Resultados" />
                    </div>)
                    : (<div className="wraper">
                        <Titles text="Recomendados" />
                        <Stars setStars={setStars} />
                    </div>)
            }
            {
                inputIsNotEmpty
                    ? (areMatchedMovies
                        ? (<Scroller
                            movies={searchedMovies}
                            setIsLoading={setIsLoading}
                            setPageNum={setPageNum}
                            pageNum={pageNum}
                        />)
                        : (<h3>No se encontraron coincidencias</h3>)
                    )
                    : (<Scroller
                        movies={rankedMovies}
                        setIsLoading={setIsLoading}
                        setPageNum={setPageNum}
                        pageNum={pageNum}
                    />)
            }
        </div>
    )
}

export default Home;