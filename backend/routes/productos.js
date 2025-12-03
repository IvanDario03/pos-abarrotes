const express = require("express");
const router = express.Router();
const pool = require("../db");

// Listar productos
router.get("/", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM productos");
  res.json(rows);
});

// Crear producto
router.post("/", async (req, res) => {
  const { codigo, nombre, precio, stock } = req.body;

  await pool.query(
    "INSERT INTO productos (codigo, nombre, precio, stock) VALUES (?, ?, ?, ?)",
    [codigo, nombre, precio, stock]
  );

  res.status(201).json({ message: "Producto creado" });
});

// Actualizar producto
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { nombre, precio, stock } = req.body;

  await pool.query(
    "UPDATE productos SET nombre = ?, precio = ?, stock = ? WHERE id = ?",
    [nombre, precio, stock, id]
  );

  res.json({ message: "Producto actualizado" });
});

// Eliminar producto
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  await pool.query("DELETE FROM productos WHERE id = ?", [id]);

  res.json({ message: "Producto eliminado" });
});

module.exports = router;
