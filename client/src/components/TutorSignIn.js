import React from 'react';
import "./TutorSignIn.css";



function TutorSignIn() {
    
    return (
        <div>
            <form className="tutor__form">
                <h2>Tutor Sign In</h2>
                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="Last Name"/>
                <input type="text" placeholder="Grade"/>
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default TutorSignIn
