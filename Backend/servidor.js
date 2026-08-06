import express from "express"

//Parte do Mateus 
import clientes from './router/clientes.js'
//Parte do Caua
import filmes from './router/filmes.js';
//Parte do joão Vitor 
import ingressos from './router/ingressos.js'
//Parte do Gabriel Kamank
import sessoes from './router/sessoes.js'

const app = express()

app.use(express.json())
//Parte do Mateus Bohn dos Santos 
app.use("/api/v1/clientes", clientes)
//Parte do Caua
app.use("/api/v1/filmes", filmes)
//Parte do joão Vitor 
app.use('/api/v1/ingressos', ingressos)
//Parte do Gabriel Kamank
app.use("/api/v1/sessoes", sessoes)


app.listen(3000 , () => {
    // Exibe uma mensagem no console quando quando o servidor estiver ativo .
    console.log("Servidor escutando na porta 3000")
})