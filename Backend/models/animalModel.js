import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const animalSchema = new Schema({
    name: { type: String, required: true },
    speciesName: { type: String, required: true },
    age: { type: Number, required: true, min: 0 },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    habitatName: { type: String, required: true },
    medicalRecords: [{ type: Schema.Types.ObjectId, ref: 'MedicalRecord' }],
    zookeeper: { type: String },
    caretaker: { type: String },
    note: { type: String }
});

export default model('Animal', animalSchema);
