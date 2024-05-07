import paypal  from "paypal-rest-sdk";

const ticketPayment = async (req, res) => {
    try {
        let create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": "http://localhost:5173/visitor/payment/success",
                "cancel_url": "http://localhost:5173/failed"
            },
            "transactions": [{
                "item_list": {
                    "items": [{
                        "name": "item",
                        "sku": "item",
                        "price": "1.00",
                        "currency": "USD",
                        "quantity": 1
                    }]
                },
                "amount": {
                    "currency": "USD",
                    "total": "1.00"
                },
                "description": "This is the payment description."
            }]
        };


        await paypal.payment.create(create_payment_json, function (error, payment) {
                if(error) {
                    console.log(error);
                    throw error;
                } else {
                    console.log(payment);

                    let data = payment;
                    console.log("paid data",payment)
                    res.json(data);
                }

        })
        
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const confirmPayment = (req,res)=>{
    try {
        console.log(req.query);

        const payerId = req.query.PayerID;
        const paymentId = req.query.paymentId;

        const express_checkout_json = {
            "payer_id": payerId,
            "transactions": [{
                "amount": {
                    "currency": "USD",
                    "total": "1.00"
                },
                "description": "This is the payment description."
            }]
        }

        paypal.payment.execute(paymentId, express_checkout_json, function (error, payment){
            if(error) {
                console.log(error);
                return res.redirect("http://localhost:5173/failed")
            } else {
                const response = JSON.stringify(payment);
                const ParsedResponse = JSON.parse(response);
                console.log(ParsedResponse);
                return res.redirect("http://localhost:5173/visitor/payment/success")
            }
        })
    } catch (error) {
        console.log(error);
    }
}

export {ticketPayment, confirmPayment};