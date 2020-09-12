import React from 'react';
import "./Login.css";
import { auth, provider } from '../firebase';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Login() {
    const [{}, dispatch] = useStateValue();
    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
            .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
        <div className="login__container">
            <img src="https://watermark.ventures/wp-content/uploads/2020/09/TutorNet-Logo.png" />
            
        <div className="login__text">
            <h1>Sign in to TutorNet</h1>
        </div>
        <button onClick={signIn}>Sign In With Google</button>
        </div>
        </div>
    )
}

export default Login