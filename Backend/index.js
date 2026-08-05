import express from "express";
import filmes from "./router/filmes.js";

const app = express();

app.use(express.json())

app.use("/api/v1", filmes)

app.listen(3000, () => {
    console.log("executando na porta 3000");
})