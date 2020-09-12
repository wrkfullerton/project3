import React from 'react'
import { Avatar, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <Link to="/">
            <img 
                className="header__logo"
                src="https://watermark.ventures/wp-content/uploads/2020/09/TutorNet-Logo.png"
                alt="tutornet-logo"
                />
            </Link>
        <div className="header__center">
            <input type="text"/>
            <SearchIcon />
        </div>
        <div className="header__right">
            <Link to="/tutor/register" className="header__link">
            <p>Become a Tutor</p>
            </Link>
            <LanguageIcon/>
            <ExpandMoreIcon/>
            <Avatar />
            </div>
        </div>

        
    )
}

export default Header
