export const INITIAL_PACKAGES = [
  { id: "TLX-2024-001", remitente: "Almacén Central", destinatario: "Carlos Méndez",
    ciudad: "Bogotá → Medellín", estado: "En ruta", peso: "2.4 kg",
    dims: "30×20×15", fecha: "2024-06-01", lat: 6.244, lng: -75.574 },
  { id: "TLX-2024-002", remitente: "TechStore CO", destinatario: "Ana López",
    ciudad: "Bogotá → Cali", estado: "Entregado", peso: "0.8 kg",
    dims: "20×15×10", fecha: "2024-06-01", lat: 3.451, lng: -76.532 },
  { id: "TLX-2024-003", remitente: "Fashion Hub", destinatario: "Luis Torres",
    ciudad: "Bogotá → Barranquilla", estado: "En bodega", peso: "3.1 kg",
    dims: "40×30×20", fecha: "2024-05-31", lat: 10.964, lng: -74.796 },
];

export const MOCK_REPARTIDORES = [
  { id: "R-01", nombre: "Juan Herrera",  lat: 4.711, lng: -74.072, paquetes: 4, estado: "Activo" },
  { id: "R-02", nombre: "Sofia Ramírez", lat: 6.244, lng: -75.574, paquetes: 2, estado: "Activo" },
  { id: "R-03", nombre: "Marcos Vidal",  lat: 3.451, lng: -76.532, paquetes: 6, estado: "Activo" },
  { id: "R-04", nombre: "Elena Cruz",    lat: 10.964, lng: -74.796, paquetes: 1, estado: "Pausa" },
];

export const ESTADOS = ["En bodega", "En ruta", "En reparto", "Entregado", "Incidente"];