import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import '../styles/home.css';

const colors = {
    gold: "#EFB810",
    gray: "#A9A9A9"
}

function Stars({ setStars }) {
    
    // Se crea un arreglo de 5 posiciones (que representaran las estrellas)
    const starsArray = Array(5).fill(0);
    // Un estado que contiene el valor actual del filtrado
    const [currentValue, setCurrentValue] = useState(0);
    // Un estado que contiene el valor apuntado con el mouse
    const [hoverValue, setHoverValue] = useState(undefined);

    // Si el valor que el usuario clickea es el mismo que el que ya estaba seleccionado, setea el valor a 0
    const handleClick = value => {
        setCurrentValue(value);
        if (value === currentValue) {
            setCurrentValue(0);
        }
    };

    /* Como efecto secundario se setea stars (quien verdaderamente se encarga del filtrado) con el valor actual representado por la estrella a la que se le hizo click */
    useEffect(() => {
        setStars(currentValue)
    }, [setStars, currentValue]);

    // Detecta sobre que estrella se encuentra el mouse
    const handleMouseOver = value => {
        setHoverValue(value)
    };

    // Detecta cuando el mouse deja de apuntar a las estrellas de filtrado
    const handleMouseLeave = () => {
        setHoverValue(undefined)
    };

    return (
        <div>
            <p className="filter-text">Filtrar por puntuación</p>

            <div style={{ display: "flex", flexDirection: "row", justifyContent: 'flex-end', marginRight: "80px" }}>
                {
                    starsArray.map((star, index) => {
                        return (
                            <FaStar
                                key={index}
                                size={24}
                                style={{ marginRight: "2px", cursor: "pointer" }}
                                onClick={() => handleClick(index + 1)}
                                onMouseOver={() => handleMouseOver(index + 1)}
                                onMouseLeave={handleMouseLeave}
                                color={(hoverValue || currentValue) > index ? colors.gold : colors.gray}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Stars;