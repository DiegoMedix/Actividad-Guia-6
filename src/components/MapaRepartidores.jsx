import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { MOCK_REPARTIDORES } from "../data/mockData";

const iconoRepartidor = L.divIcon({
  html: `<div style="font-size:28px;line-height:1">🚚</div>`,
  className: "", iconAnchor: [14, 14]
});

export default function MapaRepartidores() {
  return (
    <div style={{ background: "#1e293b", borderRadius: 12, padding: 24, marginBottom: 32 }}>
      <h2 style={{ color: "#f59e0b", fontSize: "1.1rem", marginBottom: 16 }}>
        🗺️ Ubicación de repartidores
      </h2>
      <MapContainer
        center={[4.711, -74.072]} zoom={6}
        style={{ height: 400, borderRadius: 10 }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap"
        />
        {MOCK_REPARTIDORES.map(r => (
          <Marker key={r.id} position={[r.lat, r.lng]} icon={iconoRepartidor}>
            <Popup>
              <strong>{r.nombre}</strong><br />
              Paquetes: {r.paquetes}<br />
              Estado: {r.estado}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}