import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import Badge from "../components/Badge";

const iconoPaquete = L.divIcon({
  html: `<div style="font-size:28px;line-height:1">📦</div>`,
  className: "", iconAnchor: [14, 14]
});

const TIMELINE = ["En bodega", "En ruta", "En reparto", "Entregado"];

function EstadoPaquete({ paquete }) {
  const idx = TIMELINE.indexOf(paquete.estado);
  return (
    <div style={{ background: "#1e293b", borderRadius: 12, padding: 24, marginBottom: 24 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <div>
          <p style={{ color: "#64748b", fontSize: "0.8rem", margin: "0 0 4px" }}>N° de guía</p>
          <p style={{ color: "#f59e0b", fontFamily: "monospace", fontSize: "1.1rem", margin: 0 }}>{paquete.id}</p>
        </div>
        <Badge estado={paquete.estado} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 24 }}>
        {[
          ["Remitente",    paquete.remitente],
          ["Destinatario", paquete.destinatario],
          ["Ruta",         paquete.ciudad],
          ["Peso",         paquete.peso],
          ["Dimensiones",  paquete.dims],
          ["Fecha",        paquete.fecha],
        ].map(([k, v]) => (
          <div key={k}>
            <p style={{ color: "#64748b", fontSize: "0.75rem", margin: "0 0 2px" }}>{k}</p>
            <p style={{ color: "#f1f5f9", fontSize: "0.9rem", margin: 0 }}>{v}</p>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
        {TIMELINE.map((etapa, i) => {
          const completado = i <= idx;
          const actual = i === idx;
          return (
            <div key={etapa} style={{ display: "flex", alignItems: "center", flex: 1 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{
                  width: 20, height: 20, borderRadius: "50%",
                  background: completado ? "#f59e0b" : "#334155",
                  border: actual ? "3px solid #fbbf24" : "none",
                  display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                  {completado && !actual && <span style={{ color: "#0f172a", fontSize: 12 }}>✓</span>}
                </div>
                <p style={{ color: completado ? "#f59e0b" : "#475569", fontSize: "0.7rem", margin: "4px 0 0", whiteSpace: "nowrap" }}>
                  {etapa}
                </p>
              </div>
              {i < TIMELINE.length - 1 && (
                <div style={{ flex: 1, height: 2, background: i < idx ? "#f59e0b" : "#334155", marginBottom: 16 }} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function PaginaRastreo({ packages }) {
  const [guia, setGuia] = useState("");
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  const buscar = () => {
    if (!guia.trim()) return;
    setCargando(true);
    setResultado(null);
    setError("");
    setTimeout(() => {
      const encontrado = packages.find(p => p.id.toLowerCase() === guia.trim().toLowerCase());
      if (encontrado) setResultado(encontrado);
      else setError(`No se encontró ningún paquete con el número de guía "${guia}"`);
      setCargando(false);
    }, 800);
  };

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "48px 16px" }}>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <h1 style={{ color: "#f1f5f9", fontSize: "1.8rem", margin: "0 0 8px" }}>Rastrear mi paquete</h1>
        <p style={{ color: "#64748b" }}>Ingresa tu número de guía para conocer el estado de tu envío</p>
      </div>

      {/* Buscador */}
      <div style={{ display: "flex", gap: 12, marginBottom: 32 }}>
        <input
          value={guia}
          onChange={e => setGuia(e.target.value)}
          onKeyDown={e => e.key === "Enter" && buscar()}
          placeholder="Ej: TLX-2024-001"
          style={{
            flex: 1, padding: "12px 16px", borderRadius: 10,
            background: "#1e293b", border: "1px solid #334155",
            color: "#f1f5f9", fontSize: "1rem"
          }}
        />
        <button
          onClick={buscar}
          style={{
            padding: "12px 28px", background: "#f59e0b", color: "#0f172a",
            border: "none", borderRadius: 10, fontWeight: 700,
            cursor: "pointer", fontSize: "0.95rem"
          }}
        >
          {cargando ? "Buscando..." : "Buscar"}
        </button>
      </div>

      {error && (
        <div style={{ background: "#7f1d1d", color: "#fca5a5", padding: 16, borderRadius: 10, marginBottom: 24 }}>
          {error}
        </div>
      )}

      {resultado && (
        <>
          <EstadoPaquete paquete={resultado} />
          <div style={{ background: "#1e293b", borderRadius: 12, padding: 24 }}>
            <h3 style={{ color: "#f59e0b", marginBottom: 16, fontSize: "1rem" }}>📍 Última ubicación</h3>
            <MapContainer
              center={[resultado.lat, resultado.lng]} zoom={12}
              style={{ height: 300, borderRadius: 10 }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="© OpenStreetMap" />
              <Marker position={[resultado.lat, resultado.lng]} icon={iconoPaquete}>
                <Popup>{resultado.id} — {resultado.estado}</Popup>
              </Marker>
            </MapContainer>
          </div>
        </>
      )}
    </div>
  );
}