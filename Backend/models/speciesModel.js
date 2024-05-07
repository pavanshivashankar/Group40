import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const speciesSchema = new Schema({
    name: { type: String, required: true },
    classification: { type: String, required: true },
    description: { type: String, required: true }
});

export default model('Species', speciesSchema);
