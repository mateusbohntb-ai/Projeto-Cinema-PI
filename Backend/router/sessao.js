import express from 'express'
import sessao from '../repository/sessao'

const router = express.Router()

router.post("/", (req, res) => {
    const { filme, sala, horario, idioma } = req.body

    if (!filme || !sala || !horario || !idioma) {
        res.status(400).send({ message: "Preenche os dados" })
        return
    }

    const sessao = { filme, sala, horario, idioma }
    sessoes.push(sessao)
    res.status(200).send({ message: "Sessão cadastrada", sessao })
})

router.get("/", (req, res) => {
    res.status(200).send(sessoes)
})

router.get("/:filme", (req, res) => {
    const filme = req.params.filme
    const sessoesDoFilme = sessoes.filter(it => it.filme === filme)

    if (sessoesDoFilme.length === 0) {
        res.status(404).send({ message: "Nenhuma sessão encontrada para esse filme" })
        return
    }

    res.status(200).send({ message: "Sessões encontradas", sessoes: sessoesDoFilme })
})

export default router