import express from "express"
import bco from "../repository/bco.js"

const router = express.Router()

router.get("/Buscar" ,(req,res) => {


     const id = req.params.id
    const pessoa = bco.find(it => it.id == id)
    if (!pessoa) {
        res.send({ message: "Pessoa não encontrada" })
        return
    }
  
  res.status(200).send({
    message: pessoa
  });
})

router.get("/criar", (req, res) => {
    const { id, name } = req.query
    if(!id || !name) {
        res.send({ message: "Favor informar id e name" })
        return 
    }
    bco.push({ id, name })
     
  res.status(200).send({
    message: "pessoa criada com sucesso"
  });
})

router.get("/alterar/:id", (req, res) => {
    const id = req.params.id
    const { name } = req.query
    const pessoa =  bco.find(it => it.id == id)
    if(!pessoa) {
        res.send({ message: "Favor informar id" })
        return 
    }
    pessoa.name = name
  
    res.status(200).send({
    message: "pessoa alterada  com sucesso"
  });
})


router.get("/deletar/:id", (req, res) => {
    const id = req.params.id
    const pessoa =  bco.find(it => it.id == id)
    if(!pessoa) {
        res.send({ message: "Favor informar id e name" })
        return 
    }
     bco.splice(it => it.id == id, 1)
    
    res.status(200).send({
    message: "pessoa deletada com sucesso"
  });
})


export default router