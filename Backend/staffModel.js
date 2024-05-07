import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const staffSchema = new Schema({
    name: { type: String, required: true },
    role: { type: String, enum: ['Admin', 'AnimalSpecialist', 'AnimalCaretaker', 'Employee'], required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    // shifts: [{ type: Schema.Types.ObjectId, ref: 'Shift' }],
    shift: {type: String, rquired: true}
});

export default model('Staff', staffSchema);