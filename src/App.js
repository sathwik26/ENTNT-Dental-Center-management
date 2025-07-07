import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login.jsx";
import Dashboard from "./components/Dashboard.jsx";
import PatientView from "./components/PatientView.jsx";
import { useAuth } from "./contexts/AuthContext.jsx";

function App() {
  const { user } = useAuth();

  if (!user) return <Login />;

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/patient" element={user.role === "Patient" ? <PatientView /> : <Navigate to="/" />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
export default App;
