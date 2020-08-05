import express from "express";
import routes from "./routes";
import cors from "cors";

const app = express();

app.use(cors()); // Habilita o CORS
app.use(express.json()); // Configura leitura/resposta em JSON

app.use(routes); // Importa os endpoints da API

app.listen(3333); // Seleciona a porta da API
