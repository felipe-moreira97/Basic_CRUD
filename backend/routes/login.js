const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mysql = require('../mysql').pool

router.post('/',(req,res,next) => {
    const email = req.body.email
    const password = req.body.password
    mysql.getConnection((err,conn) => {
        conn.query('SELECT * FROM api.basic WHERE email = ?',
        [email],
        (err,result,field) => {
            conn.release()
            if (err) {
                return res.status(401).send({
                    mensagem:'erro de conecção'
                })
            }
            if (result.length < 1) {
                return res.status(401).send({
                    mensagem:'email incorreto'
                })
            }
            bcrypt.compare(password,result[0].pass,(err,check) => {
                if (err) {
                    return res.status(401).send({
                        mensagem:'erro de autenticação'
                    })
                }
                if (check) {
                    const token = jwt.sign(
                        {
                            id:result[0].id,
                            email
                        },
                        "secret",
                        {expiresIn:"1d"}
                    )
                    res.status(200).send({
                        mensagem:'autenticado com sucesso',
                        token
                    })
                } else {
                    return res.status(401).send({
                        mensagem:"senha incorreta"
                    })
                }})
            })
            })
        })
module.exports = router