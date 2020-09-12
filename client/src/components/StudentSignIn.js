import React from 'react';
import "./StudentSignIn.css";

function StudentSignIn() {
    return (
        <div className="student">
            
            <form className="student__form">
                <h2>Student Sign In</h2>
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

export default StudentSignIn
