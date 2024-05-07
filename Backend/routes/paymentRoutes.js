import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { ticketPayment, confirmPayment } from '../controllers/paymentController.js';

const router = express.Router();

router.get('/', protect, ticketPayment);
// router.get('/success', protect, confirmPayment);
router.get('/payment/success', protect, confirmPayment);

router.get('/failed', async (req, res) => {

    return res.redirect("http://localhost:5173/failed")
})


export default router;
