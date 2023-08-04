  import express from "express";
  const app = express();
  const port = 3000;

  app.get("/", (req, res) => {
    res.json({
      nome: "Maria Eduarda Jardim",
    });
    console.log("Rota / solicitada");
  });

  app.listen(port, () => {
    console.log(`Serviço escutando na porta:  ${port}`);
  });

  import dotenv from "dotenv";

  dotenv.config();
  import { selectUsuarios } from "./bd.js";
  app.get("/usuarios", async (req, res) => {
    console.log("Rota GET/usuarios solicitada");
    try {
      const usuarios = await selectUsuarios();
      res.json(usuarios);
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message || "Erro!" });
    }
  });