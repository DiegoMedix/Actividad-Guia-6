import PaqueteForm from "../components/PaqueteForm";
import PaquetesTable from "../components/PaquetesTable";
import MapaRepartidores from "../components/MapaRepartidores";

export default function AdminDashboard({ packages, setPackages }) {
  const stats = [
    { label: "Total paquetes", valor: packages.length, color: "#3b82f6" },
    { label: "En ruta",        valor: packages.filter(p => p.estado === "En ruta").length,    color: "#f59e0b" },
    { label: "Entregados",     valor: packages.filter(p => p.estado === "Entregado").length,  color: "#22c55e" },
    { label: "Incidentes",     valor: packages.filter(p => p.estado === "Incidente").length,  color: "#ef4444" },
  ];

  const onAgregar = (nuevo) => setPackages([...packages, nuevo]);

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 16px" }}>
      {/* Tarjetas de estadísticas */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 32 }}>
        {stats.map(s => (
          <div key={s.label} style={{
            background: "#1e293b", borderRadius: 12, padding: 20,
            borderLeft: `4px solid ${s.color}`
          }}>
            <p style={{ color: "#64748b", fontSize: "0.8rem", margin: "0 0 8px" }}>{s.label}</p>
            <p style={{ color: s.color, fontSize: "2rem", fontWeight: 700, margin: 0 }}>{s.valor}</p>
          </div>
        ))}
      </div>

      <PaqueteForm onAgregar={onAgregar} />
      <PaquetesTable packages={packages} setPackages={setPackages} />
      <MapaRepartidores />
    </div>
  );
}