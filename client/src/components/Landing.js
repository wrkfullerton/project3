import React, { Component } from 'react';
import "../styles/Landing.css"
import Banner from "./Banner";
import Card from "./Card";
import { Link } from 'react-router-dom';

class Landing extends Component {
    render() {
        return (
            <div className="landing">
                <div class="container">
                    <Banner />
                    <div className="landing__section">
                        <Link to="tutor/:">
                            <Card
                                src="https://media-exp1.licdn.com/dms/image/C5603AQF1ERsfuOr95w/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=bmBmci7hpRweUD7DPr8I04rtVqMlGIGHiqCNKE_dq7U"
                                tutor="Seulki"
                                subject="Computer Science"
                                price="$50.00" />
                        </Link>
                        <Card
                            src="https://media-exp1.licdn.com/dms/image/C5103AQGaK0KhW4ipGw/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=lD0c0W7LJBwyVIkW5J810NV9VDBILl6BgskKRQ4DGTU"
                            tutor="Kurt"
                            subject="History"
                            price="$50.00" />
                        <Card
                            src="https://media-exp1.licdn.com/dms/image/C4E03AQGeHiQPi8oPqA/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=Gd-AM0Fohdt_6aeZMjW4OGcgtIP_eVXeh2jjSXF6vRA"
                            tutor="Eddie"
                            subject="Spanish"
                            price="$50.00" />
                    </div>

                    <div className="landing__section">
                        <Card
                            src="https://media-exp1.licdn.com/dms/image/C4E03AQES1Z6_xMmarA/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=J_DbYTzSuJ92P3TtCQvFeb5qx1LbYq1IrVHBoHXOtDo"
                            tutor="Will"
                            subject="Economics"
                            price="$45.00" />
                        <Card
                            src="https://media-exp1.licdn.com/dms/image/C5603AQEX2lvVAE_mjA/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=LWWqtNFbCOjMW_FqDffF1Z2rwDUYJJoda-sLX3ix2u4"
                            tutor="Meg"
                            subject="English"
                            price="$45.00" />
                        <Card
                            src="https://media-exp1.licdn.com/dms/image/C4D03AQGxvuy0lTEzZw/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=N0KxLBtQhAoFuroC8ZjebciO9fiPOOzDnjloBsfgY_g"
                            tutor="Peter"
                            subject="Math"
                            price="$45.00" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;