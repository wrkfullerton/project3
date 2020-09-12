import React from 'react'
import "./SearchPage.css";
import SearchResult from "./SearchResult";
import { Button } from "@material-ui/core";

function SearchPage({tutors}) {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>20 Tutors - 29 August to 30 August - 1 student</p>
                <h1>Tutors nearby</h1>

                <Button variant="outlined">Type of Tutor</Button>
                <Button variant="outlined">Tutor Rating</Button>
                <Button variant="outlined">Price Range</Button>
                <Button variant="outlined">In Person or Virtual</Button>
                
                <Button variant="outlined">More Filters</Button>

                {tutors.map((tutor) => (
                    <SearchResult 
                    src={tutor.src}                
                    tutor={tutor.tutor}
                    description={tutor.description}
                    subject={tutor.subject}
                    price={tutor.price}
                    />
                ))}
{/* 

                <SearchResult 
                    src="https://media-exp1.licdn.com/dms/image/C5603AQF1ERsfuOr95w/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=bmBmci7hpRweUD7DPr8I04rtVqMlGIGHiqCNKE_dq7U" 
                    location=""
                    tutor="Seulki" 
                    description="Will work with you either in person or distance learning."
                    subject="Computer Science" 
                    star={4.73}
                    price="$50.00"
                    total="$100.00"
                />
                
                <SearchResult 
                    src="https://media-exp1.licdn.com/dms/image/C5103AQGaK0KhW4ipGw/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=lD0c0W7LJBwyVIkW5J810NV9VDBILl6BgskKRQ4DGTU" 
                    location=""
                    tutor="Kurt" 
                    description="Will work with you either in person or distance learning."
                    subject="History" 
                    star={4.73}
                    price="$50.00"
                    total="$100.00"
                />
                 */}

            </div>
        </div>
    )
}

export default SearchPage