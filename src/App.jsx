import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import PaginaRastreo from "./pages/PaginaRastreo";
import { INITIAL_PACKAGES } from "./data/mockData";

function Nav({ packages }) {
  const loc = useLocation();
  return (
    <nav style={{
      background: "#0f172a", borderBottom: "1px solid #1e293b",
      padding: "12px 24px", display: "flex", alignItems: "center", gap: 24
    }}>
      <span style={{ color: "#f59e0b", fontWeight: 700, fontSize: "1.1rem" }}>▲ TrackLogix</span>
      <Link to="/" style={{
        color: loc.pathname === "/" ? "#f59e0b" : "#94a3b8",
        textDecoration: "none", fontWeight: 600, fontSize: "0.9rem"
      }}>
        Admin <span style={{
          background: "#1e293b", color: "#f59e0b",
          borderRadius: 999, padding: "1px 8px", fontSize: "0.75rem", marginLeft: 4
        }}>{packages.length}</span>
      </Link>
      <Link to="/rastreo" style={{
        color: loc.pathname === "/rastreo" ? "#f59e0b" : "#94a3b8",
        textDecoration: "none", fontWeight: 600, fontSize: "0.9rem"
      }}>
        Rastreo público
      </Link>
    </nav>
  );
}

export default function App() {
  const [packages, setPackages] = useState(INITIAL_PACKAGES);
  return (
    <BrowserRouter>
      <Nav packages={packages} />
      <Routes>
        <Route path="/"        element={<AdminDashboard packages={packages} setPackages={setPackages} />} />
        <Route path="/rastreo" element={<PaginaRastreo  packages={packages} />} />
      </Routes>
    </BrowserRouter>
  );
}