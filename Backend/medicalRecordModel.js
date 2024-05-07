import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const medicalRecordSchema = new Schema({
    date: { type: Date, default: Date.now },
    description: { type: String, required: true },
    medications: [{ type: String }],
    diagnosis: { type: String, required: true },
    status: {type: String, required: true},
    animal: { type: Schema.Types.ObjectId, ref: 'Animal', required: true }
});

export default model('MedicalRecord', medicalRecordSchema);
