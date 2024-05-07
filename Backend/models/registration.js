import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const registrationSchema = new Schema({
    event: { type: Schema.Types.ObjectId, ref: 'Event', required: true },
    visitor: { type: Schema.Types.ObjectId, ref: 'Visitor', required: true },
    registrationDate: { type: Date, default: Date.now },
    registrationType: { type: String, enum: ['Single', 'Group'], default: 'Single' },
    paymentStatus: { type: String, enum: ['Pending', 'Paid', 'Cancelled'], default: 'Pending' },
});

export default model('Registration', registrationSchema);
