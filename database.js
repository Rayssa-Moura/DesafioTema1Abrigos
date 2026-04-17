const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

let db;

const criarBanco = async () => {
  db = await open({
    filename: "./database.db",
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS abrigos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT,
      endereco TEXT,
      capacidade_total INT,
      capacidade_atual INT,
      doacoes_necessarias TEXT
    );
  `);

  const dados = await db.get("SELECT COUNT(*) as total FROM abrigos");

  if (dados.total === 0) {
    await db.exec(`
      INSERT INTO abrigos 
      (nome, endereco, capacidade_total, capacidade_atual, doacoes_necessarias) VALUES
      ("Escola Professor Otávio", "Rua 1", 100, 80, "água"),
      ("Ginásio da Parangaba", "Rua 2", 50, 50, "roupas"),
      ("Igreja Trindade", "Rua 3", 70, 20, "alimentos");
    `);
  }

const tabela = await db.all("SELECT * FROM abrigos");
console.table(tabela);
  console.log("Banco pronto!");
};

const getDB = () => db;

module.exports = { criarBanco, getDB };