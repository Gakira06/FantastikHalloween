const express = require("express");
const cors = require("cors");

const fs = require("fs");
const path = require("path");

const bodyParser = require("body-parser");

const { v4: uuid } = require("uuid");

const app = express();

const port = 5001;

app.use(cors());

app.use(bodyParser.json());

const dbPath = path.join(__dirname, "db.json");

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const readData = async () => {
  try {
    if (!fs.existsSync(dbPath)) {
      fs.writeFileSync(dbPath, JSON.stringify({ fantasias: [], usuarios: [] }));
    }
    const data = await fs.promises.readFile(dbPath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Erro ao ler o arquivo db.json:", error);
    return { fantasias: [], usuarios: [] }; // Retorna um estado padrão em caso de erro
  }
};

const writeData = (data) => {
  try {
    fs.promises.writeFile(dbPath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Erro ao ler o arquivo db.json", error);
  }
};

app.get("/fantasias", async (req, res) => {
  const data = await readData();
  res.json(data.fantasias);
});

app.post("/contato", async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    if (!nome || !email) {
      return res
        .status(400)
        .send({
          message: "Nome e email precisão estar digitados corretamente.",
        });
    }
    const data = await readData();
    const novoUsuario = {
      id: uuid(),
      nome: nome,
      email: email,
      senha: senha,
    };

    data.usuarios.push(novoUsuario);
    await writeData(data);
    res.status(201).send({ message: "Usuário salvo com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Erro ao salvar o usuário." });
  }
});

app.get("/contato", async (req, res) => {
  const data = await readData();
  res.json(data.usuarios);
});

app.listen(port, () => {
  console.log(`Servidor rodando com sucesso na porta ${port}`);
});
