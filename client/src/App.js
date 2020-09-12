import React, {useState, useEffect} from 'react';
import './App.css';
import Home from "./components/Home";
import SearchPage from "./components/SearchPage";
import Header from "./components/Header";
import Login from "./components/Login";
import StudentSignIn from "./components/StudentSignIn";
import TutorRegister from "./components/TutorRegister";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from './StateProvider';
import Pusher from "pusher-js";
import axios from './axios';

function App() {
  const [{ user }, dispatch] = useStateValue();
  const [tutors, setTutors] = useState([]);
  
  useEffect(() => {
    axios.get('/api/v1/tutor/sync')
    .then(response => {
      setTutors(response.data);
    })
  }, []);
  
  useEffect(() => {
    const pusher = new Pusher('981264040b512ba39a38', {
      cluster: 'us2',
    });


    const channel = pusher.subscribe("tutor");
    channel.bind("inserted", (newTutor) => {
      setTutors([...tutors, newTutor])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [tutors]);

  console.log(tutors)

  return (
    <div className="app">
      
      {!user ? (
        <Login />
      ) : (
      <Router>
        <Header/>
        <Switch>
            <Route path="/student/signin">
              <StudentSignIn/>
            </Route>
          

            <Route path="/tutor/register">
              <TutorRegister user={user}/>
            </Route>

            <Route path="/search">
              <SearchPage tutors={tutors}/>
            </Route>

            <Route path="/login">
              <Login />
            </Route>


            <Route path="/">
              <Home />
            </Route>
          </Switch>
        <Footer />
      </Router>
      )}
    </div>

  );
}

export default App;
