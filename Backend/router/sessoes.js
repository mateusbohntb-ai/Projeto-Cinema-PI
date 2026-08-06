import express from "express"
import sessao from "../repository/sessao.js"


const router = express.Router()

router.get("/alterar/:id", (req, res) => {
    const id = req.params.id
    const { name } = req.query
    const filme =  sessao.find(it => it.id == id)
    if(!filme) {
        res.send({ message: "Favor informar id" })
        return 
    }
    filme.name = name
  
    res.status(200).send({
    message: "filme alterado  com sucesso"
  });
})


router.get("/deletar/:id", (req, res) => {
    const id = req.params.id
    const filme =  sessao.find(it => it.id == id)
    if(!filme) {
        res.send({ message: "Favor informar id e name do filme" })
        return 
    }
     sessao.splice(it => it.id == id, 1)
    
    res.status(200).send({
    message: "filme deletad com sucesso"
  });
})




export default router