import express from "express";
import cors from "cors";

import { router } from "./routes";

const app = express();

const allowedOrigins = [
  'http://localhost',
  'http://127.0.0.1:8080',
  'http://127.0.0.1:5500',
  'https://www.ne12.bradesconetempresa.b.br'
];

app.use(cors({
  origin: function(origin, callback) {
    let allowed = true

    // permite conexões sem origin. Exemplo: Mobile Apps
    if (!origin) allowed = true

    // verifica se o origin da request consta na lista de autorizados no array allowedOrigins
    if (!allowedOrigins.includes(origin)) allowed = false

    callback(null, allowed)
  }
}));

app.use(express.json());

app.use(router);

app.listen(3333, () => console.log("Server is running!"));
