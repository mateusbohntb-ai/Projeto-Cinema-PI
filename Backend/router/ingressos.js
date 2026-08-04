import express from 'express'
import ingressos from '../repository/ingressos.js'

const router = express.Router()

router.post("/", (req, res) => {
    const { nomeCliente, cpf, filme, horario, assento, preco } = req.body

    if (!nomeCliente || !cpf || !filme || !horario || !assento || !preco) {
        res.status(400).send({ message: "Preenche todos os dados aí" })
        return
    }

    const ingresso = { nomeCliente, cpf, filme, horario, assento, preco }
    ingressos.push(ingresso)

    res.status(200).send({ message: "Ingresso cadastrado", ingresso })
})

router.get("/", (req, res) => {
    res.status(200).send(ingressos)
})

router.get("/:cpf", (req, res) => {
    const cpf = req.params.cpf
    const ingresso = ingressos.find(it => it.cpf === cpf)

    if (!ingresso) {
        res.status(404).send({ message: "Ingresso não encontrado" })
        return
    }

    res.status(200).send({ message: "Ingresso encontrado", ingresso })
})

export default router