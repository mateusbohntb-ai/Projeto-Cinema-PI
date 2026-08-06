import express from "express"
import filmes from "../repository/filmes.js"

const router = express.Router()

router.post("/filmes", (req, res) => {
    const { titulo, diretor, anoLancamento, genero } = req.body

    if (!titulo || !diretor) {
        return res.status(400).json({ message: "Os campos id, titulo e diretor são obrigatórios." })
    }

    const novoFilme = {
        titulo,
        diretor,
        anoLancamento,
        genero,
    }

    filmes.push(novoFilme)

    res.status(201).json({ message: "Filme cadastrado com sucesso.", filme: novoFilme })
})

router.get("/filmes", (req, res) => {
    res.status(200).json(filmes)
})

router.get("/filmes/:titulo", (req, res) => {
    const { titulo } = req.params

    const filme = filmes.find((filme) => filme.titulo === (titulo))

    if (!filme) {
        return res.status(404).json({ message: "Filme não encontrado." })
    }

    res.status(200).json(filme)
})

export default router