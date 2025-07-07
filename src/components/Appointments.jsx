import React, { useState, useEffect } from "react";
import { getItem, setItem } from "../utils/storage";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [details, setDetails] = useState("");

  useEffect(() => {
    const saved = getItem("appointments") || [];
    setAppointments(saved);
  }, []);

  const addAppointment = () => {
    const updated = [...appointments, { id: Date.now(), details }];
    setAppointments(updated);
    setItem("appointments", updated);
    setDetails("");
  };

  return (
    <div>
      <h3>Appointments</h3>
      <input placeholder="Appointment Details" value={details} onChange={(e) => setDetails(e.target.value)} />
      <button onClick={addAppointment}>Add</button>
      <ul>
        {appointments.map((a) => (
          <li key={a.id}>{a.details}</li>
        ))}
      </ul>
    </div>
  );
};

export default Appointments;
