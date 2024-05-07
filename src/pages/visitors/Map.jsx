import React from "react";
import Visitor_Navbar from "../../components/visitor/Visitor_Navbar";

function Map() {
  return (
    <>
      <Visitor_Navbar />
      <section style={{ marginTop: "5.5rem" }}>
        <h2 className="text-center">Use Map to reach the Zoo...</h2>
        <h6 className="text-center text-muted">
          "Navigate seamlessly through our world with our <br /> Google Map
          feature - your trusted guide to exploring our location effortlessly."
        </h6>

        <div className="text-center mt-4 mb-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.7532605062743!2d-74.2813235!3d40.7674513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ab9108f88317%3A0x7d4c14c9be019b5c!2sEssex%20County%20Turtle%20Back%20Zoo!5e0!3m2!1sen!2sin!4v1715012721857!5m2!1sen!2sin"
            width="100%"
            height="600"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}

export default Map;
