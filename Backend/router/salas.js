import express, { Router } from 'express'

const router = express.Router()

router
.post('/salas', (req, res) => {
    try {
        const sala1 = req.body
        if( sala1 = 0 && sala1 + 1) {
        res
        .status(200)
        .send({ message: "Livre" })
        return 0
        }
    } catch (error) {
        res
        .stauts(410)
        .send({ message: "Sala já utilizada" })
    }
})

export default router 