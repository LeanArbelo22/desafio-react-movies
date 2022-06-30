import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import MoviesContainer from './MoviesContainer';
import '../styles/home.css';

function Scroller({ movies, setIsLoading, setPageNum, pageNum }) {
    // Este componente se encargara de sumar una pagina de la API cada vez que el usuario llega al final de la app

    return (
        <InfiniteScroll
            dataLength={movies.length}
            next={() => {
                setIsLoading(true);
                setPageNum(pageNum + 1);
            }}
            hasMore={true}
            loader={<h2 className="loading-text">Cargando...</h2>}
            endMessage={<p style={{ textAlign: "center", fontWeight: "bold" }}>No hay mas resultados</p>}
        >
            <MoviesContainer movies={movies} />
        </InfiniteScroll>
    )
}

export default Scroller;