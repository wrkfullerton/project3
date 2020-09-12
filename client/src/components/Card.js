import React from 'react';
import "./Card.css";

function Card({src, tutor, description, subject, price}) {
    return (
        <div className="card">
            <img src={src} alt="" />
            <div className="card__info">
                <h2>{tutor}</h2>
                <h4>{subject}</h4>
                <p>{description}</p>
                <h3>{price}</h3>
            </div>
        </div>
    )
}

export default Card
