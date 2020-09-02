import React from 'react'
import "../styles/SearchPage.css";
import SearchResult from "./SearchResult";
import { Button } from "@material-ui/core";

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>6 Tutors - 29 August to 30 August - 1 student</p>
                <h1>Tutors nearby</h1>

                <Button variant="outlined">Type of Tutor</Button>
                <Button variant="outlined">Tutor Rating</Button>
                <Button variant="outlined">Price Range</Button>
                <Button variant="outlined">In Person or Virtual</Button>
                
                <Button variant="outlined">More Filters</Button>
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
                
                <SearchResult 
                    src="https://media-exp1.licdn.com/dms/image/C4E03AQGeHiQPi8oPqA/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=Gd-AM0Fohdt_6aeZMjW4OGcgtIP_eVXeh2jjSXF6vRA" 
                    location=""
                    tutor="Eddie" 
                    description="Will work with you either in person or distance learning."
                    subject="Spanish" 
                    star={4.73}
                    price="$50.00"
                    total="$100.00"
                />
                
                <SearchResult 
                    src="https://media-exp1.licdn.com/dms/image/C4E03AQES1Z6_xMmarA/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=J_DbYTzSuJ92P3TtCQvFeb5qx1LbYq1IrVHBoHXOtDo" 
                    location=""
                    tutor="Will" 
                    description="Will work with you either in person or distance learning."
                    subject="Economics" 
                    star={4.63}
                    price="$45.00"
                    total="$90.00"
                />
                
                <SearchResult 
                    src="https://media-exp1.licdn.com/dms/image/C5603AQEX2lvVAE_mjA/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=LWWqtNFbCOjMW_FqDffF1Z2rwDUYJJoda-sLX3ix2u4" 
                    location=""
                    tutor="Meg" 
                    description="Will work with you either in person or distance learning."
                    subject="English" 
                    star={4.83}
                    price="$45.00"
                    total="$90.00"
                />
                
                <SearchResult 
                    src="https://media-exp1.licdn.com/dms/image/C4D03AQGxvuy0lTEzZw/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=N0KxLBtQhAoFuroC8ZjebciO9fiPOOzDnjloBsfgY_g" 
                    location=""
                    tutor="Peter" 
                    description="Will work with you either in person or distance learning."
                    subject="Math" 
                    star={4.50}
                    price="$45.00"
                    total="$90.00"
                />
                
            </div>
        </div>
    )
}

export default SearchPage