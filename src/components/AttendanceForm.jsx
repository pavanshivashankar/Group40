import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AttendanceForm() {
  const [formData, setFormData] = useState({
    status: "Present",
    notes: "",
    reasonForAbsence: "",
  });

  const [ok, setOk] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/attendance/", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        setOk(false);
      } else {
        toast.error(data.message);
        setOk(true);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="mt-3">
      {ok ? (
        <form onSubmit={handleSubmit}>
          <div className="d-flex mb-4" style={{ gap: "12px" }}>
            <select
              name="status"
              onChange={handleChange}
              className="w-100 p-2 inputField"
            >
              <option value="Present">Present</option>
              <option value="Absent">Absent</option>
              <option value="Late">Late</option>
            </select>
          </div>
          <input
            type="text"
            name="reasonForAbsence"
            className="w-100 p-2 mb-3 inputField"
            onChange={handleChange}
            placeholder="Enter reason for absent"
          />
          <textarea
            type="text"
            name="notes"
            className="w-100 p-2 mb-3 inputField"
            onChange={handleChange}
            placeholder="Enter notes"
          />

          <button type="submit" className="btn btn-primary py-2 px-5 mt-3">
            Submit
          </button>
        </form>
      ) : (
        <h2>Attendance done</h2>
      )}
    </div>
  );
}

export default AttendanceForm;
