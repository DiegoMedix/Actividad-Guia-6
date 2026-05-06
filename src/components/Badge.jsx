export default function Badge({ estado }) {
  const colores = {
    "En bodega":  "background:#334155;color:#94a3b8",
    "En ruta":    "background:#1d4ed8;color:#bfdbfe",
    "En reparto": "background:#92400e;color:#fde68a",
    "Entregado":  "background:#14532d;color:#86efac",
    "Incidente":  "background:#7f1d1d;color:#fca5a5",
  };
  const style = colores[estado] || "background:#374151;color:#d1d5db";
  return (
    <span style={{
      ...Object.fromEntries(style.split(";").map(s => s.split(":"))),
      padding: "2px 10px",
      borderRadius: "999px",
      fontSize: "0.75rem",
      fontWeight: 600,
      whiteSpace: "nowrap"
    }}>
      {estado}
    </span>
  );
}