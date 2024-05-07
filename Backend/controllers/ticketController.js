import stripe from 'stripe';
import randomatic from 'randomatic';
import Ticket from '../models/Ticket.js';

const stripeSecretKey = 'your_stripe_secret_key';
const stripeClient = new stripe(stripeSecretKey);


export const processPaymentAndGenerateTicket = async (req, res) => {
  const { amount, currency, token, visitorId, eventId, ticketType, price } = req.body;

  try {
    
    const charge = await stripeClient.charges.create({
      amount,
      currency,
      source: token, 
      description: 'Ticket purchase'
    });

    // Handle successful payment
    // Generate ticket
    const ticket = await generateTicket(visitorId, eventId, ticketType, price);

    res.status(200).json({ message: 'Payment successful', charge, ticket });
  } catch (error) {
    
    res.status(400).json({ message: 'Payment failed', error: error.message });
  }
};

// Function to generate a ticket
const generateTicket = async (visitorId, eventId, ticketType, price) => {
  try {
    // Generate barcode and qrCode
    const barcode = generateBarcode();
    const qrCode = generateQRCode();

    // Create a new ticket instance
    const ticket = new Ticket({
      visitor: visitorId,
      event: eventId,
      purchaseDate: Date.now(),
      ticketType,
      price,
      barcode,
      qrCode,
    });

    // Save the ticket to the database
    const savedTicket = await ticket.save();

    return savedTicket;
  } catch (error) {
    throw new Error(`Ticket generation failed: ${error.message}`);
  }
};



// Function to generate a random barcode
const generateBarcode = () => {
  // Generate a random alphanumeric barcode with 10 characters
  return randomatic('Aa0', 10);
};

// Function to generate a random QR code
const generateQRCode = () => {
  // Generate a random alphanumeric QR code with 12 characters
  return randomatic('Aa0', 12);
};


