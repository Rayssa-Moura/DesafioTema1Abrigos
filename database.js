const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

const criarBanco = async () => {
  const db = await open({
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

  await db.exec(`
    INSERT INTO abrigos 
    (nome, endereco, capacidade_total, capacidade_atual, doacoes_necessarias) VALUES
("Escola Professor Otávio Terceiro de Farias", "Rua 1, Bairro Mondubim, Fortaleza - CE, CEP 60762401", 100, 80, "água, alimentos"),
("Ginásio da Parangaba", "Rua 2, Bairro Conjunto Ceará, Fortaleza - CE, CEP 60762402", 50, 50, "roupas, cobertores"),
("Igreja Trindade", "Rua 3, Bairro José Walter, Fortaleza - CE, CEP 60762403", 70, 20, "alimentos, produtos de higiene");
  `);

  console.log("Banco pronto com dados!");
};

module.exports = criarBanco;