import roteadorUsuario from "./routes/usuario.js";
import roteadorLogin from "./routes/login.js";
import dotenv from "dotenv";
import express from "express";
dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(roteadorUsuario);
app.use(roteadorLogin);

app.get("/", (req, res) => {
  res.json({
    message: "API para CRUD usuario: https://github.com/mejs1/11-API-Introducao",
  });
  console.log("Rota / solicitada");
});

app.listen(port, () => {
  console.log(`Serviço escutando na porta:  ${port}`);
});
