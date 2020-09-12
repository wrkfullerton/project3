import express from 'express';
import mongoose from 'mongoose';
import Tutors from "./dbTutors.js";
import Pusher from 'pusher';
import cors from 'cors';

import dotenv from 'dotenv';

dotenv.config()

// app config
const app = express();
const port = process.env.PORT || 9001


const pusherKey = process.env.pusherKey
const pusherSK = process.env.pusherSK

const pusher = new Pusher({
  
  appId: "1071562",
  key: pusherKey,
  secret: pusherSK,
  cluster: "us2"

  });
    
// // middleware
app.use(express.json())
app.use(cors())

// /// DB config

const connection_url = process.env.MONGODB_URI

mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// // // ????
const db = mongoose.connection
db.once('open', ()=> {
    console.log("DB connected");

    const tutorCollection = db.collection("tutors");

    const changeStream = tutorCollection.watch(); 

    changeStream.on('change',(change)=> {
        console.log("A change occured", change);

        if (change.operationType === 'insert') {
            const tutorDetails = change.fullDocument;
            pusher.trigger('tutors', 'inserted', {
                src: tutorDetails.src,
                tutor: tutorDetails.tutor,
                email: tutorDetails.email,
                description: tutorDetails.description,
                subject: tutorDetails.subject,
                price: tutorDetails.price,
            });
            } else {
                console.log("Error triggering Pusher");
            }
        });
});

// // API routes
app.get('/', (req, res)=>res.status(200).send('hello world - its will'))

app.get('/api/v1/tutor/sync', (req, res) => {
    Tutors.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

app.post('/api/v1/tutor/new', (req, res) => {
    const dbTutor = req.body 

    Tutors.create(dbTutor, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

// Listen
app.listen(port,()=>console.log(`Listening on localhost:${port}`));