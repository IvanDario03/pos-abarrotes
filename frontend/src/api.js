import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api", // Backend de Iván
});

// Productos
export const getProductos = () => API.get("/productos");

// Registrar venta
export const registrarVenta = (items) =>
  API.post("/ventas", { items });

export default API;
