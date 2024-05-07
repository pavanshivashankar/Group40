import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const organizerSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String },
    organization: { type: String },
    role: { type: String },
});

export default model('Organizer', organizerSchema);
