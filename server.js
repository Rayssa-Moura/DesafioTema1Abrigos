const express = require("express");
const { criarBanco, getDB } = require("./database");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API de abrigos");
});

app.get("/abrigos", async (req, res) => {
  const db = getDB();

  const abrigos = await db.all("SELECT * FROM abrigos");

  const resultado = abrigos.map((abrigo) => ({
    ...abrigo,
    status:
      abrigo.capacidade_atual < abrigo.capacidade_total
        ? "Disponível"
        : "Lotado"
  }));

  res.json(resultado);
});
app.get("/abrigos/disponiveis", async (req, res) => {
  const db = getDB();

  const abrigos = await db.all(
    "SELECT * FROM abrigos WHERE capacidade_atual < capacidade_total"
  );

  res.json(abrigos);
});

criarBanco().then(() => {
  app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
  });
});