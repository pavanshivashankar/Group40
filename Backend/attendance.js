import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const attendanceSchema = new Schema({
    staff: { type: Schema.Types.ObjectId, ref: 'Staff', required: true },
    date: { type: Date, required: true },
    status: { type: String, enum: ['Present', 'Absent', 'Late'], default: 'Present' },
    notes: { type: String },
    reasonForAbsence: { type: String },
});

export default model('Attendance', attendanceSchema);
