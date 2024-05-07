import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const ticketSchema = new Schema({
    visitor: { type: Schema.Types.ObjectId, ref: 'Visitor', required: true },
    event: { type: Schema.Types.ObjectId, ref: 'Event' },
    purchaseDate: { type: Date, default: Date.now },
    barcode: { type: String },
    qrCode: { type: String },
    ticketType: { type: String, enum: ['Standard', 'VIP', 'Premium'], default: 'Standard' },
    price: { type: Number, required: true },
});

export default model('Ticket', ticketSchema);
