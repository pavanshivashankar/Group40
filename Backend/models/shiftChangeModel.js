import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const shiftChangeSchema = new Schema({
    staff: { type: Schema.Types.ObjectId, ref: 'Staff', required: true },
    shift: {type: String, required: true},
    reason: { type: String, required: true },
});

export default model('ShiftChange', shiftChangeSchema);
