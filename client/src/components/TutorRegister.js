import React, {useState, useEffect} from 'react';
import "./TutorRegister.css";
import db from '../firebase';



function TutorRegister() {
    const [description, setDescription] = useState("");
    const [subject, setSubject] = useState("");
    const [price, setPrice] = useState("");


    const registerTutor = (e) => {
        e.preventDefault();

        // db.collection('tutors'). {
        //     src: user.photoURL,
        //     tutor: user.displayName,
        //     description: description,
        //     subject: subject,
        //     price: price
        // });

        
    }

    setDescription("");
    setSubject("");
    setPrice("");

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
