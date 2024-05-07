import React from "react";
import CaretakerDash_Navbar from "../../components/caretakerDashboard/CareTakerDash_Navbar";
import AttendanceForm from "../../components/AttendanceForm";


function AttendanceCaretaker() {


  return (
    <>
      <CaretakerDash_Navbar />
      <section style={{ marginTop: "5rem" }}>
        <div className="container mt-4 ">
          <div className="row justify-content-center p-4">
            <div className=" col-md-6 p-3 shadow mt-4">
              <h3 className="fw-bold">Attendance Form </h3>
              <AttendanceForm />
            </div>
          </div>
        </div>
      </section>

      {/* <p className="inline mx-2 mt-5 text-blue-600 text-left">
        <Link to={"/employee"} className="text-decoration-none fs-6">
          ⬅️ Go Back
        </Link>
      </p> */}
    </>
  );
}

export default AttendanceCaretaker;