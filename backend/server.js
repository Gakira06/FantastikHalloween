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
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const dbPath = path.join(__dirname, "db.json");

const readData = async () => {
  try {
    if (!fs.existsSync(dbPath)) {
      fs.writeFileSync(dbPath, JSON.stringify({ fantasias: [], usuarios: [] }));
    }
    const data = await fs.promises.readFile(dbPath, "utf-8");
    const json = JSON.parse(data);

    const fixedUser = {
      id: "1",
      nome: "Admin",
      email: "admin@admin.com",
      senha: "1234",
    };
    if (!json.usuarios.some((u) => u.email === fixedUser.email)) {
      json.usuarios.push(fixedUser);
      await fs.promises.writeFile(dbPath, JSON.stringify(json, null, 2));
    }
    return json;
  } catch (error) {
    console.error("Erro ao ler o arquivo db.json:", error);
    return { fantasias: [], usuarios: [] }; 
  }
};

const writeData = (data) => {
  try {
    fs.promises.writeFile(dbPath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Erro ao ler o arquivo db.json", error);
  }
};


app.post("/login", async (req, res) => {
  try {
    const { email, senha } = req.body;
    if (!email || !senha) {
      return res
        .status(400)
        .send({ message: "Email e senha são obrigatórios." });
    }
    const data = await readData();
    const usuario = data.usuarios.find(
      (u) => u.email === email && u.senha === senha
    );
    if (!usuario) {
      return res.status(401).send({ message: "Email ou senha inválidos." });
    }
    res.status(200).send({
      message: "Login realizado com sucesso!",
      usuario: { id: usuario.id, nome: usuario.nome, email: usuario.email },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Erro ao realizar login." });
  }
});

app.get("/fantasias", async (req, res) => {
  const data = await readData();
  res.json(data.fantasias);
});

app.post("/contato", async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    if (!nome || !email) {
      return res.status(400).send({
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
