import React from 'react';
import "../styles/ContactPage.css";
import { Button, IconButton } from "@material-ui/core";
import { useStateValue } from '../StateProvider';
import { useHistory } from "react-router-dom";

function ContactPage({tutor, subject, description, price}) {
    const [{tutorCard}, dispatch] = useStateValue();
    const history = useHistory();
    const removeFromPage = () => {
        // remove item from the basket
        dispatch({
            type: 'REMOVE_TUTOR_STATE',
            tutor: tutor,

        });
        
    };

    console.log(tutorCard);
    return (
        <div>
            <h2>Contact Page</h2>
                <h2>{tutor}</h2> 
                <h4>{subject}</h4>
                <p>{description}</p>
                <h3>{price}</h3>
        </div>
    )
}

export default ContactPage
