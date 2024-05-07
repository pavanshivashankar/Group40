import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const visitorSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    ticketType: { type: String, enum: ['General', 'VIP'], required: true },
    ticketsPurchased: [{ type: Schema.Types.ObjectId, ref: 'Ticket' }],
    eventsAttended: [{ type: Schema.Types.ObjectId, ref: 'Event' }]
});

export default model('Visitor', visitorSchema);

