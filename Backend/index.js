import express from 'express'
import ingressos from './repository/ingressos'

const app = express()

app.use(express.json())

app.use('/api/v1/ingressos', ingressos)

app.listen(3000, () => {
    console.log("Servidor escutando na porta 3000")
}) 