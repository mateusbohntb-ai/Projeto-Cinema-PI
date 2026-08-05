import express from 'express'
import sessaoRouter from './router/sessao.js'

const app = express()

app.use(express.json())

app.use('/sessao', sessaoRouter)

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})