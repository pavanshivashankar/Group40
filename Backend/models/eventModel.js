import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const eventSchema = new Schema({
    name: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    capacity: { type: Number, required: true },
    registrationRequired: { type: Boolean, default: false },
    registrationOpen: { type: Boolean, default: false },
    registrationStartDate: { type: Date },
    registrationEndDate: { type: Date },
    description: { type: String },
});

export default model('Event', eventSchema);
