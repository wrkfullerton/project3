import React from 'react';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import "./SearchResult.css";

function SearchResult({
    src, 
    email, 
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
                <h3>{tutor}</h3>
                <p>{email}</p>
                <p>{subject}</p>
                <p>____</p>
                <p>{description}</p>
                    
                </div>

                <div className="searchResult__infoBottom">
            
                <div className="searchResults__price">
                    <h2>{price}/ hour</h2>
                </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
