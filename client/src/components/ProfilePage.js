import React from 'react';
import "../styles/ProfilePage.css";

function ProfilePage(src, tutor, description, subject, price) {
    return (
        <div>
            <h2>Profile Page</h2>
            <img src={src} alt="" />
            <div className="card__info">
                <h2>{tutor}</h2>
                <h4>{subject}</h4>
                <p>{description}</p>
                <h3>{price}</h3>
            </div>
        </div>
    )
}

export default ProfilePage
