import express from "express"
import clientes from "./router/clientes.js"
import bco from "./repository/bco.js"
const app = express()

app.use(express.json())
//Parte do Mateus Bohn dos Santos 
app.use("/api/v1/clientes", clientes)


app.listen(3000 , () => {
    // Exibe uma mensagem no console quando quando o servidor estiver ativo .
    console.log("Servidor escutando na porta 3000")
})