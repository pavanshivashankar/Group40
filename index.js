import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import './database/conn.js'
import userRoutes from './routes/userRoutes.js'
import animalRoutes from './routes/animalRoutes.js'
import medicalRecordsRoutes from './routes/medicalRecordRoutes.js'
import staffRoutes from './routes/staffRoutes.js'
import eventRoutes from './routes/eventRoutes.js'
import announcementRoutes from "./routes/announcementRoutes.js"
import shiftRoutes from "./routes/shiftRoutes.js"
import feedbackRoutes from './routes/feedbackRoutes.js'
import animalMessageRoutes from './routes/animalMessageRoutes.js'
import shiftChangeRoutes from './routes/shiftChangeRoutes.js'
import attendenceRoutes from './routes/attendenceRoutes.js'

import paymentRoutes from './routes/paymentRoutes.js';


// paypal integration
import paypal from 'paypal-rest-sdk';

paypal.configure( {
    'mode' : 'sandbox',
    'client_id' : process.env.CLIENT_ID,
    'client_secret' : process.env.CLIENT_SECRET
} );









const app = express();

dotenv.config()

const PORT = process.env.PORT || 3000


app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use("/user", userRoutes)
app.use("/animal", animalRoutes)
app.use("/medicalRecords", medicalRecordsRoutes)
app.use("/staff", staffRoutes);
app.use("/event", eventRoutes);
app.use("/shift", shiftRoutes )
app.use("/announcement", announcementRoutes)
app.use("/feedback", feedbackRoutes)
app.use("/animalMessage", animalMessageRoutes)
app.use("/shiftChange", shiftChangeRoutes)
app.use("/attendance", attendenceRoutes);

// PAYMENT INTEGRATE
app.use('/payment', paymentRoutes );
app.use('/visitor', paymentRoutes );




app.get('/', (req, res) => {
    res.send("I am server, Hello...................")
})

app.listen(PORT, (error)=> {
    if(error){
        console.log(error)
    } else {
        console.log(`Sever is running on port http://localhost:${PORT}`)
    }
})