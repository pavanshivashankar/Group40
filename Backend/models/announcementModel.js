import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const announcementSchema = new Schema({
    topic: { type: String, required: true },
    dept: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

export default model('Announcement', announcementSchema);
