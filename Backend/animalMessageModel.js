import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const animalMessageSchema = new Schema({
    date: { type: Date, default: Date.now },
    message: { type: String, required: true },
    animal: { type: Schema.Types.ObjectId, ref: 'Animal', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

export default model('AnimalMessage', animalMessageSchema);
