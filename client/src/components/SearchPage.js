import React from 'react'
import "./SearchPage.css";
import SearchResult from "./SearchResult";
import { Button } from "@material-ui/core";

function SearchPage({tutors}) {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <h5><strong>{tutors.length}</strong> Tutors Available</h5>
                
                {/* <Button variant="outlined">Type of Tutor</Button>
                <Button variant="outlined">Tutor Rating</Button>
                <Button variant="outlined">Price Range</Button>
                <Button variant="outlined">In Person or Virtual</Button>
                
                <Button variant="outlined">More Filters</Button> */}

                {tutors.map((tutor) => (
                    <SearchResult 
                    src={tutor.src}                
                    tutor={tutor.tutor}
                    email={tutor.email}
                    description={tutor.description}
                    subject={tutor.subject}
                    price={tutor.price}
                    />
                ))}

            </div>
        </div>
    )
}

export default SearchPage