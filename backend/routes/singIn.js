const express =require('express')
const bcrypt = require('bcrypt')
const mysql = require('../mysql').pool
const router = express.Router()

router.post('/',(req,res,next) => {
    const email = req.body.email
    const password = req.body.password    
    const hash = bcrypt.hashSync(password,10) 
    if (!hash) {
        return res.status(401).send({
            mensagem:"Erro ao criar usuário bcrypt",
            hash
        })
    }
    mysql.getConnection((err,conn) => {
        if (err) {
            return res.status(401).send({
                mensagem: "Erro ao criar usuário conection",
                err
            })
        }
        conn.query('INSERT INTO api.basic (email,pass) VALUES (?,?)',
        [email,hash],(err,results,field) => {
            if (err) {
                return res.status(401).send({
                    mensagem: "Erro ao criar usuário mysql"
                })
            } else {
                conn.query('SELECT id,email FROM api.basic ORDER BY id',(err,results,field) => {
                    conn.release()
                    if (err) {
                        return res.status(500).send({
                            mensagem:"Erro de requisição"
                        }) 
                    }
                    res.status(200).send({
                        users:results,
                        mensagem:"usuário criado com sucesso"
                    })

                })
            }
        })
    })
})
module.exports = router
