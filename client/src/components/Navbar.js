import React, { Component } from 'react';
import { Avatar, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link, withRouter } from 'react-router-dom';
import "../styles/Navbar.css";
class Landing extends Component {
  // sends user back to landing page after pressing logout
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem('usertoken');
    this.props.history.push(`/`);
  }

  render() {
    // sends user to the register page once clicked
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    )

    // sends user to the profile page once clicked
    const userLink = (
      <ul className="navbar-nav">
        {<li className="nav-item">
          <Link to="/input" className="nav-link">
            Info
          </Link>
        </li>}
        {<li className="nav-item">
          <Link to="/dashboard" className="nav-link">
            Your Charts
          </Link>
        </li>}
        < li className="nav-item">
          <Link to="/matches" className="nav-link">
            Matches
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        </li>
        <li className="nav-item">
          <a href="/#" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
      </ul >
    )

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-0">

        <a className="navbar-brand" href="/">
          <img src="favicon2.ico" width="30" height="30" className="d-inline-block align-top mr-2" alt=""></img>
            TutorNet
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarsExample10"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          </ul>
          {localStorage.usertoken ? userLink : loginRegLink}
        </div>
      </nav>
    )
  }
}

export default withRouter(Landing);


// import React from 'react'
// import { Avatar, Button, IconButton } from "@material-ui/core";
// import SearchIcon from "@material-ui/icons/Search";
// import LanguageIcon from "@material-ui/icons/Language";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import { Link, useHistory } from "react-router-dom";
// import "../styles/Navbar.css";

// function Navbar() {
//   const history = useHistory();
//     return (
//         <div className="navbar">
//             <Link to="/">
//             <a className="navbar-brand" href="/">
//             <img src="favicon.ico" width="30" height="30" className="d-inline-block align-top mr-2" alt=""></img>
//               TutorNet
//             </a>
//             </Link>
//           <div className="navbar__center">
//             <input type="text"/>
//             <IconButton onClick={() => history.push('/search')}>
//             <SearchIcon className="navbar__search"/>
//             </IconButton>
//           </div>

//           <div className="navbar__right">
//               <Link to="login" className="navbar__link">
//               <p>Login</p>
//               </Link>

//               <Link to="register" className="navbar__link">
//               <p>Register</p>
//               </Link>

//               <LanguageIcon/>
//               <ExpandMoreIcon/>
//               <Link to="/login">
//               <Avatar/>
//               </Link>
//           </div>
//         </div>


//     )
// }

// export default Navbar