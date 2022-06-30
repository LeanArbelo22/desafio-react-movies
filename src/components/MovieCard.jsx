import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

function MovieCard({ id, image, title, year, votes }) {

    return (
        <div className="movie-card">
            <img src={image} className="poster-image" alt={"Poster " + title} />
            <Link to={`/${id}`} className="card-text" style={{textDecoration: "none"}}>
                <span className="card-movie-title">{title}</span>
                <span className="card-movie-year">{year}</span>
                <span className="card-movie-year">{votes / 2}⭐</span>
            </Link>
        </div>
    )
}

export default MovieCard;