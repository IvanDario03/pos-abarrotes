const express = require("express");
const router = express.Router();
const pool = require("../db");

// Registrar venta con items
router.post("/", async (req, res) => {
  const { items } = req.body; // [{producto_id, cantidad}]

  if (!items || items.length === 0) {
    return res.status(400).json({ message: "No hay items en la venta" });
  }

  const conn = await pool.getConnection();

  try {
    await conn.beginTransaction();

    let total = 0;

    for (const item of items) {
      const [rows] = await conn.query(
        "SELECT precio, stock FROM productos WHERE id = ?",
        [item.producto_id]
      );
      const producto = rows[0];

      if (!producto) throw new Error("Producto no encontrado");
      if (producto.stock < item.cantidad) throw new Error("Stock insuficiente");

      total += producto.precio * item.cantidad;

      await conn.query(
        "UPDATE productos SET stock = stock - ? WHERE id = ?",
        [item.cantidad, item.producto_id]
      );
    }

    const [ventaResult] = await conn.query(
      "INSERT INTO ventas (total) VALUES (?)",
      [total]
    );

    const ventaId = ventaResult.insertId;

    for (const item of items) {
      const [rows] = await conn.query(
        "SELECT precio FROM productos WHERE id = ?",
        [item.producto_id]
      );
      const producto = rows[0];

      await conn.query(
        "INSERT INTO venta_items (venta_id, producto_id, cantidad, precio) VALUES (?, ?, ?, ?)",
        [ventaId, item.producto_id, item.cantidad, producto.precio]
      );
    }

    await conn.commit();
    res.status(201).json({ message: "Venta registrada", ventaId, total });
  } catch (err) {
    await conn.rollback();
    res.status(500).json({ error: err.message || "Error al registrar venta" });
  } finally {
    conn.release();
  }
});

module.exports = router;
