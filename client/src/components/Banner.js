import React, { useState } from 'react';
import './Banner.css';
import { Button } from '@material-ui/core';
import Search from "./Search";
import { useHistory } from "react-router-dom";

function Banner() {
    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);
    return (
        <div className="banner">
            <div className="banner__search">
                
                <Button onClick={() => setShowSearch(!showSearch)} className="banner__searchButton" variant="outline">{showSearch ? "Hide": "Search Dates"}</Button>
                {showSearch && <Search />}
            </div>

            <div className="banner__info">
            
                <h3>Get out and strech your imagination</h3>
                <h5>Get a tutor and make deposits into your future.</h5>
                
                <Button onClick={() => history.push('/search')} variant="outlined">Get Tutor</Button>
                
            </div>
        </div>
    )
}

export default Banner
