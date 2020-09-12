import React, { useState } from 'react';
import "./TutorRegister.css";
import axios from "../axios";
import { useHistory } from "react-router-dom";

function TutorRegister({user}) {
    const history = useHistory();
    const [description, setDescription] = useState("");
    const [subject, setSubject] = useState("");
    const [price, setPrice] = useState("");


    const registerTutor = async (e) => {
        e.preventDefault();

    await axios.post("/api/v1/tutor/new", {
            src: user.photoURL,
            email: user.email,
            tutor: user.displayName,
            description: description,
            subject: subject,
            price: price,
        });

        setDescription("");
        setSubject("");
        setPrice("");

        history.push('/search');
    }

    

    return (
        <div className="tutor">
        <div className="tutor__container">
            <form className="tutor__form">
            <img 
                className="header__logo"
                src="https://watermark.ventures/wp-content/uploads/2020/09/TutorNet-Logo.png"
                alt="tutornet-logo"
                />
                <h2>Become a Tutor</h2>
                <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)}/>
                <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)}/>
                <button type="submit" onClick={registerTutor}>Submit</button>
            </form>
            </div>
        </div>
    )
}

export default TutorRegister
