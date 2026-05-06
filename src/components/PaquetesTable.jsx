import { useState } from "react";
import Badge from "./Badge";
import { ESTADOS } from "../data/mockData";

export default function PaquetesTable({ packages, setPackages }) {
  const [busqueda, setBusqueda] = useState("");

  const filtrados = packages.filter(p =>
    [p.id, p.remitente, p.destinatario, p.ciudad].some(v =>
      v.toLowerCase().includes(busqueda.toLowerCase())
    )
  );

  const cambiarEstado = (id, nuevoEstado) => {
    setPackages(packages.map(p => p.id === id ? { ...p, estado: nuevoEstado } : p));
  };

  return (
    <div style={{ background: "#1e293b", borderRadius: 12, padding: 24, marginBottom: 32 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <h2 style={{ color: "#f59e0b", fontSize: "1.1rem", margin: 0 }}>📋 Paquetes registrados</h2>
        <input
          placeholder="Buscar por guía, remitente..."
          value={busqueda} onChange={e => setBusqueda(e.target.value)}
          style={{
            padding: "6px 14px", borderRadius: 8, background: "#0f172a",
            border: "1px solid #334155", color: "#f1f5f9", fontSize: "0.85rem", width: 240
          }}
        />
      </div>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #334155" }}>
              {["N° Guía", "Remitente", "Destinatario", "Ruta", "Estado", "Fecha", "Acciones"].map(h => (
                <th key={h} style={{ padding: "10px 14px", color: "#64748b", textAlign: "left", fontWeight: 600 }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtrados.map(p => (
              <tr key={p.id} style={{ borderBottom: "1px solid #1e293b" }}
                onMouseEnter={e => e.currentTarget.style.background = "#0f172a"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}
              >
                <td style={{ padding: "10px 14px", color: "#f59e0b", fontFamily: "monospace" }}>{p.id}</td>
                <td style={{ padding: "10px 14px", color: "#f1f5f9" }}>{p.remitente}</td>
                <td style={{ padding: "10px 14px", color: "#f1f5f9" }}>{p.destinatario}</td>
                <td style={{ padding: "10px 14px", color: "#94a3b8" }}>{p.ciudad}</td>
                <td style={{ padding: "10px 14px" }}><Badge estado={p.estado} /></td>
                <td style={{ padding: "10px 14px", color: "#64748b" }}>{p.fecha}</td>
                <td style={{ padding: "10px 14px" }}>
                  <select
                    value={p.estado}
                    onChange={e => cambiarEstado(p.id, e.target.value)}
                    style={{
                      background: "#0f172a", border: "1px solid #334155",
                      color: "#f1f5f9", borderRadius: 6, padding: "4px 8px", fontSize: "0.8rem"
                    }}
                  >
                    {ESTADOS.map(e => <option key={e}>{e}</option>)}
                  </select>
                </td>
              </tr>
            ))}
            {filtrados.length === 0 && (
              <tr>
                <td colSpan={7} style={{ textAlign: "center", padding: 32, color: "#64748b" }}>
                  No se encontraron paquetes
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}