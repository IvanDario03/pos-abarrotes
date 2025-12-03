require("dotenv").config();
const express = require("express");
const cors = require("cors");

const productosRoutes = require("./routes/productos");
const ventasRoutes = require("./routes/ventas");

const app = express();
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.json({ message: "API POS Abarrotes funcionando correctamente" });
});

// Rutas API
app.use("/api/productos", productosRoutes);
app.use("/api/ventas", ventasRoutes);

// Servidor
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en puerto ${PORT}`);
});

