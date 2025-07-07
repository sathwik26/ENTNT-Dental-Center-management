import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";

export default function PatientView() {
  const { user, logout } = useAuth();
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    const all = JSON.parse(localStorage.getItem("incidents")) || [];
    setIncidents(all.filter(i => i.patientId === user.patientId));
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-bold">Welcome, {user.email}</h1>
        <button onClick={logout} className="bg-red-500 text-white px-4 py-1">Logout</button>
      </div>

      <h2 className="text-lg font-semibold mb-2">Your Appointments</h2>
      {incidents.map(i => (
        <div key={i.id} className="border p-2 rounded mb-2">
          <p><strong>{i.title}</strong></p>
          <p>{new Date(i.appointmentDate).toLocaleString()}</p>
          <p>Status: {i.status}</p>
        </div>
      ))}
    </div>
  );
}
