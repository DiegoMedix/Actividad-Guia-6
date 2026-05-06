import { useState } from "react";
import { ESTADOS } from "../data/mockData";

const campoVacio = {
  remitente: "", destinatario: "", ciudad: "",
  peso: "", dims: "", estado: "En bodega"
};

export default function PaqueteForm({ onAgregar }) {
  const [form, setForm] = useState(campoVacio);
  const [errores, setErrores] = useState({});
  const [ok, setOk] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrores({ ...errores, [e.target.name]: "" });
  };

  const validar = () => {
    const e = {};
    ["remitente", "destinatario", "ciudad", "peso", "dims"].forEach(c => {
      if (!form[c].trim()) e[c] = "Campo requerido";
    });
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const e2 = validar();
    if (Object.keys(e2).length) { setErrores(e2); return; }
    const nuevo = {
      ...form,
      id: `TLX-${Date.now()}`,
      fecha: new Date().toISOString().slice(0, 10),
      lat: 4.711, lng: -74.072
    };
    onAgregar(nuevo);
    setForm(campoVacio);
    setOk(true);
    setTimeout(() => setOk(false), 3000);
  };

  const campos = [
    { name: "remitente",   label: "Remitente" },
    { name: "destinatario",label: "Destinatario" },
    { name: "ciudad",      label: "Ruta (origen → destino)" },
    { name: "peso",        label: "Peso (kg)" },
    { name: "dims",        label: "Dimensiones (cm)" },
  ];

  return (
    <div style={{ background: "#1e293b", borderRadius: 12, padding: 24, marginBottom: 32 }}>
      <h2 style={{ color: "#f59e0b", marginBottom: 20, fontSize: "1.1rem" }}>
        📦 Registrar nuevo paquete
      </h2>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {campos.map(({ name, label }) => (
            <div key={name}>
              <label style={{ color: "#94a3b8", fontSize: "0.8rem", display: "block", marginBottom: 4 }}>
                {label}
              </label>
              <input
                name={name} value={form[name]} onChange={handleChange}
                style={{
                  width: "100%", padding: "8px 12px", borderRadius: 8,
                  background: "#0f172a", border: `1px solid ${errores[name] ? "#ef4444" : "#334155"}`,
                  color: "#f1f5f9", fontSize: "0.9rem", boxSizing: "border-box"
                }}
              />
              {errores[name] && <span style={{ color: "#ef4444", fontSize: "0.75rem" }}>{errores[name]}</span>}
            </div>
          ))}
          <div>
            <label style={{ color: "#94a3b8", fontSize: "0.8rem", display: "block", marginBottom: 4 }}>
              Estado inicial
            </label>
            <select
              name="estado" value={form.estado} onChange={handleChange}
              style={{
                width: "100%", padding: "8px 12px", borderRadius: 8,
                background: "#0f172a", border: "1px solid #334155",
                color: "#f1f5f9", fontSize: "0.9rem"
              }}
            >
              {ESTADOS.map(e => <option key={e}>{e}</option>)}
            </select>
          </div>
        </div>
        <button
          type="submit"
          style={{
            marginTop: 20, padding: "10px 24px", background: "#f59e0b",
            color: "#0f172a", border: "none", borderRadius: 8,
            fontWeight: 700, cursor: "pointer", fontSize: "0.9rem"
          }}
        >
          + Registrar paquete
        </button>
        {ok && <span style={{ marginLeft: 16, color: "#86efac", fontSize: "0.9rem" }}>✓ Paquete registrado</span>}
      </form>
    </div>
  );
}