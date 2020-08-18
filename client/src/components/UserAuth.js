import React, {useState, useEffect } from 'react'
import { Modal, makeStyles, Input } from '@material-ui/core';
import "./UserAuth.css";
import { auth } from '../firebase';


function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing[2, 4, 3]
    },
}));

 function UserAuth() {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [openSignIn, setOpenSignIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                // User is logged in
                console.log(authUser);
                setUser(authUser);

            } else {
                // User has logged out
            setUser(null);
            }
        })
        return () => {
            unsubscribe();
        }

    }, [user, username]);


const signUp = (event) => {
    event.preventDefault();

    auth
    .createUserWithEmailAndPassword(email, password)
    .then((authUser) => {
        authUser.user.updateProfile({
            displayName: username
        })
    })
    .catch((error) => alert(error.message));
    
    setOpen(false);
}

const signIn = (event) => {
    event.preventDefault();
 
    auth
    .signInWithEmailAndPassword(email, password)
    .catch((error) => alert(error.message))

    setOpenSignIn(false);
}

    return (
        <div className="userauth__modal">
            <Modal
            open={open}
            onClose={() => setOpen(false)}
            >
                <div style={modalStyle} className={classes.paper}>
                    <form className="userauth__signUp">
                            <center>
                                <h2 className="userauth__text">TutorNet</h2>
                            </center>

                            <Input 
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            />

                            <Input 
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />

                            <Input 
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                            <button type="submit" className="userauth__signUpButton" onClick={signUp} >Submit</button>
                    </form>
                </div>
            </Modal>

            <Modal
            open={openSignIn}
            onClose={() => setOpenSignIn(false)}
            >
                <div style={modalStyle} className={classes.paper}>
                    <form className="userauth__signIn">
                        <center>
                            <h2>TutorNet</h2>
                            </center>
                            
                            <Input 
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />

                            <Input 
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                            <button type="submit" className="userauth__signUpButton" onClick={signIn} >Submit</button>
                    </form>
                </div>
            </Modal>


    {user ? (
        <center>
            <button className="userauth__buttonSignOut" onClick={() => auth.signOut()}>Sign Out</button>
        </center>
    ): (

        <div className="userauth__loginContainer">
        
            <button className="userauth__buttonSignIn" onClick={() => setOpenSignIn(true)}>Sign In</button>
        
        <br></br>
        
            <button className="userauth__buttonSignUp" onClick={() => setOpen(true)}>Sign Up</button>

        </div>
        
    )}
                 
        </div>

     )
}

export default UserAuth;
   
