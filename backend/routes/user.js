const express = require('express')
const router = express.Router()
const mysql = require('../mysql').pool

router.get('/',(req,res,next) => {
    mysql.getConnection((err,conn) => {
        if (err) {
            return res.status(500).send({
                mensagem:"Erro de requisição"
            })
        }
        conn.query('SELECT id,email FROM api.basic',(err,results,field) => {
            conn.release()
            if (err) {
                return res.status(500).send({
                    mensagem:"Erro de requisição"
                }) 
            }
            res.status(200).send({
                users:results
            })
        })
    })
})
router.put('/',(req,res,next) => {
    const id = req.body.id
    const email = req.body.email
    mysql.getConnection((err,conn) => {
        if (err) {
            return res.status(500).send({
                mensagem:'Erro de requisição'
            })
        }
        conn.query('UPDATE api.basic SET email = ? WHERE id= ?',
        [email,id],
        (err,result,field)=> {
            conn.release()
            if (err) {
                res.status(500).send({
                    mensagem:'erro de requisição'
                })
            } else{
                res.status(200).send({
                    mensagem:'usuário atualizado com sucesso'
                })
            }

        })
    })
})
router.delete('/',(req,res,next) => {
    const id = req.body.id
    mysql.getConnection((err,conn) => {
        if (err) {
            return res.status(500).send({
                mensagem:'erro do conecção'
            })
        }
        conn.query('DELETE FROM api.basic WHERE id = ?',
        [id],(err,result,field) => {
            if(err) {
                return res.status(500).send({
                    mensagem:"erro do query"
                })
            } else {
            conn.query('SELECT id,email FROM api.basic',(err,result,field)=> {
                conn.release()
                if (err) {
                    return res.status(500).send({
                        mensagem:"erro do query"
                    }) 
                } else {
                    return res.status(200).send({
                        users:result,
                        mensagem:"usuário apagado com sucesso"
                    })
                }
            })
            }
        })
    })
})

module.exports = router