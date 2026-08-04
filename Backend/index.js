import express from 'express'
import ingressos from './router/ingressos.js'

const app = express()

app.use(express.json())

app.use('/api/v1/ingressos', ingressos)

app.listen(3000, () => {
    console.log("Servidor escutando na porta 3000")
})