import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const users = [
  { id: "1", role: "Admin", email: "admin@entnt.in", password: "admin123" },
  { id: "2", role: "Patient", email: "john@entnt.in", password: "patient123", patientId: "p1" }
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")));

  const login = (email, password) => {
    const found = users.find(u => u.email === email && u.password === password);
    if (found) {
      localStorage.setItem("user", JSON.stringify(found));
      setUser(found);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
