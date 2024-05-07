import React, { useEffect, useState } from "react";
import paymentsuccess from "../../../public/paymentSuccess.png";
import Visitor_Navbar from "../../components/visitor/Visitor_Navbar";
import { Link } from "react-router-dom";
import QRCode from "qrcode.react";

function PaymentSuccess() {
  const [payId, setPayId] = useState("");

  const handleSuccessPayment = async () => {
    try {
      // Extract paymentId, token, and PayerID from the URL
      const urlParams = new URLSearchParams(window.location.search);
      const paymentId = urlParams.get("paymentId");
      console.log(paymentId);
      setPayId(paymentId);
      console.log(payId);
      const token = urlParams.get("token");
      const payerId = urlParams.get("PayerID");

      // Fetch payment data using extracted parameters
      const response = await fetch(
        `http://localhost:4000/visitor/payment/success?paymentId=${paymentId}&token=${token}&PayerID=${payerId}`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const resData = await response.json();
        console.log(resData);
      } else {
        console.error(response.status);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleSuccessPayment();
  }, []);

  return (
    <>
      <Visitor_Navbar />
      <section style={{ marginTop: "5.5rem" }}></section>
      <div className="container">
        <div className="row justify-content-center  ">
          <div className="col-md-4 mt-5">
            <div className="card">
              <div className="card-body shadow">
                <div className="">
                  <div className="text-center">
                    <img src={paymentsuccess} alt="" width="100px" />
                  </div>
                  <h5 className="text-center text-muted">
                    Congratulations ticked booked🎉
                  </h5>
                  
                </div>
              </div>
            </div>
            <div className="card ">
              {/* <h5>Payment ID: {payId}</h5> */}
              <h1>
              {payId && <QRCode value={payId} />}

              </h1>
            </div>
          </div>
          
          <p className="inline mx-2 mt-5 text-blue-600 text-left">
            <Link to={"/visitor"} className="text-decoration-none fs-6">
              ⬅️ Go to Home
            </Link>
          </p>
        </div>
      </div>
      <section />
    </>
  );
}

export default PaymentSuccess;
