import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const feedbackSchema = new Schema({
    visitor: { type: Schema.Types.ObjectId, ref: 'Visitor' },
    rating: { type: Number, min: 1, max: 5 },
    comment: { type: String },
    suggestion: { type: String },
    submittedAt: { type: Date, default: Date.now },
});

export default model('Feedback', feedbackSchema);
