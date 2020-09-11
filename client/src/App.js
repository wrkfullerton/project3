import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Landing from './components/Landing';
import Login from './components/Login';
import ProfilePage from "./components/ProfilePage";
import ContactPage from "./components/ContactPage";
import Register from './components/Register';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import Student from './components/Student';
import Tutor from './components/Tutor';
import SearchPage from "./components/SearchPage";
import Matches from './components/Matches';
import "../src/styles/Landing.css"


class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar />
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/matches" component={Matches} />
                    <Route exact path="/student" component={Student} />
                    <Route exact path="/tutor" component={Tutor} />
                    <Route exact path="/search" component={SearchPage} />

                    <Footer />
                </div>

            </Router>
        )
    }

    constructor() {
        super();
        this.state = {
            chartData: {}
        }
    }

}

export default App;