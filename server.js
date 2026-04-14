const express = require("express");
const criarBanco = require("./database");


const app = express();
app.use(express.json());


criarBanco();


app.get("/", (req, res) => {
  res.send("API de abrigos");
});


const abrigos = [
  {
    id: 1,
    endereco: "Rua 1, Bairro Mondubim, Fortaleza - CE, CEP 60762401",
    capacidade_total: 100,
    capacidade_atual: 80,
    doacoes_necessarias: "água e alimentos"
  },
  {
    id: 2,
    endereco: "Rua 2, Bairro Conjunto Ceará, Fortaleza - CE, CEP 60762402",
    capacidade_total: 50,
    capacidade_atual: 50,
    doacoes_necessarias: "roupas e cobertores"
  },
  {
    id: 3,
    endereco: "Rua 3, Bairro José Walter, Fortaleza - CE, CEP 60762403",
    capacidade_total: 70,
    capacidade_atual: 20,
    doacoes_necessarias: "alimentos e produtos de higiene"
  }
];

app.get("/abrigos", (req, res) => {
  res.json(abrigos);
});


app.get("/abrigos/:id", (req, res) => {
  const id = Number(req.params.id);

  const abrigo = abrigos.find(a => a.id === id);

  if (!abrigo) {
    return res.status(404).json({ mensagem: "Abrigo não encontrado" });
  }

  res.json(abrigo);
});


app.post("/abrigos", (req, res) => {
  const novoAbrigo = {
    id: abrigos.length + 1,
    endereco: req.body.endereco,
    capacidade_total: Number(req.body.capacidade_total),
    capacidade_atual: Number(req.body.capacidade_atual),
    doacoes_necessarias: req.body.doacoes_necessarias
  };

  abrigos.push(novoAbrigo);

  res.status(201).json(novoAbrigo);
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});