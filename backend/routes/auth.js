const jwt = require('jsonwebtoken')

function auth(req,res,next) {

    const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : false
    jwt.verify(token,"secret",(err,decoded) => {
        if (decoded) {
            next()
        } else {
            res.status(401).send({
                mensagem:"token invalido"
            })
        }
    })
}
module.exports = auth