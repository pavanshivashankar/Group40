import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const habitatSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    climate: { type: String, required: true },
    terrain: { type: String, required: true }
});

export default model('Habitat', habitatSchema);
