import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("incidents")) || [];
    setIncidents(data);
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button onClick={logout} className="bg-red-500 text-white px-4 py-1">Logout</button>
      </div>

      <h2 className="mt-6 mb-2 text-lg font-semibold">Next 10 Appointments</h2>
      <ul>
        {incidents.slice(0, 10).map(i => (
          <li key={i.id} className="border p-2 rounded my-1">
            {i.title} - {new Date(i.appointmentDate).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}