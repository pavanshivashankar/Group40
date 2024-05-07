import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const shiftSchema = new Schema({
    staff: { type: Schema.Types.ObjectId, ref: 'Staff', required: true },
    date: { type: Date, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    location: { type: String },
    notes: { type: String },
});

export default model('Shift', shiftSchema);
