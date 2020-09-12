import React from 'react';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import "./SearchResult.css";

function SearchResult({
    src, 
    location, 
    tutor, 
    subject,
    description,
    star,
    price,
    total
}) {
    return (
        <div className="searchResult">
            
            <img src={src} alt="" />
            <FavoriteBorderIcon className="searchResult__heart"/>
        
            <div className="searchResult__info">
                <div className="searchResult__infoTop">
                <p>{location}</p>
                <h3>{tutor}</h3>
                <p>{subject}</p>
                <p>____</p>
                <p>{description}</p>
                    
                </div>

                <div className="searchResult__infoBottom">
                <div className="searchResult__stars">
                <StarIcon className="searchResult__star"/>
                <p>
                <strong>{star}</strong>
                </p>
                </div>
                <div className="searchResults__price">
                    <h2>{price}/ hour</h2>
                    <p>{total} total</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
