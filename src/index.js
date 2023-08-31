
import roteadorUsuario from "./routes/usuario.js";
app.use(roteadorUsuario);
import dotenv from "dotenv";
import express from "express";
dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "API para CRUD usuario: https://github.com/mejs1/11-API-Introducao",
  });
});

app.listen(port, () => {
  // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});
