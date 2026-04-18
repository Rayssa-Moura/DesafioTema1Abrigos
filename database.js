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
  ("Escola Professor Otávio", "EEM Professor Otávio Terceiro de C, R. Antônio Farias - Prefeito José Walter, CE", 1000, 800, "água"),
  ("Ginásio da Parangaba", "R. Ildefonso Albano, 2050 - Dionísio Torres, Fortaleza - CE, 60115-000", 500, 500, "roupas"),
  ("Igreja Trindade", "Av. Gen. Osório de Paiva - Parangaba, Fortaleza - CE, 60720-000", 700, 200, "alimentos");
`);
  }

const tabela = await db.all("SELECT * FROM abrigos");
console.table(tabela);
  console.log("Banco pronto!");
};

const getDB = () => db;

module.exports = { criarBanco, getDB };