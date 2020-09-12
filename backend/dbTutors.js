import mongoose from 'mongoose';

const tutorSchema = mongoose.Schema({
    src: String,
    tutor: String,
    email: String,
    description: String,
    subject: String,
    price: String
});

export default mongoose.model('tutors', tutorSchema);