import React, { Component } from 'react';

class Landing extends Component {
    render() {
        return (
            <div className="main">
                <div className="row">
                    <div className="container">
                        <div className="jumbotron mt-5">
                            <div className="col-sm-8 mx-auto">
                                <h1 className="text-center">Welcome to TutorNet</h1>
                                <br></br>
                                <h4 className="text-center">Please log in or register to get a Match!</h4>
                                <br></br>
                                <p className="text-center"> TutorNet is...</p>

                                Find a tutor in 3 easy steps:
                        <br></br>
                                <ul>
                                    <li>Login or register</li>
                                    <li>Enter your info</li>
                                    <li>Review yor Matches</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;