import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "../styles/Register.css";
// import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// import Student from './Student';
// import Tutor from './Tutor';

class Register extends Component {

  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    return (

      <Router>
        <div className="register">

          <div className="container">

            <div className="col-md-6 mt-5 mx-auto">
              <button className="btn btn-lg btn-primary btn-block" onClick={() => this.nextPath('/student')}>
                I want to learn
           </button>
            </div>

            <div className="col-md-6 mt-5 mx-auto">

              <button className="btn btn-lg btn-primary btn-block" onClick={() => this.nextPath('/tutor')}>
                I want to teach
           </button>
            </div>


          </div>

        </div>
    </Router>
    )
  }

}

export default Register;