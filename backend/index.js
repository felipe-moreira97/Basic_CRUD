const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3001

const auth = require('./routes/auth')
const login = require('./routes/login')
const signin = require('./routes/singIn')
const userRoute = require('./routes/user')

app.use(bodyParser.json(),morgan('dev'),cors()) //BUG - retirar esse cors
/*app.use('/',(req,res,next) => {
    res.header('Access-Control-Allow-Origin','http://localhost:3000')
    res.header('Access-Control-Allow-Headers','*')
    res.header('Access-Control-Allow-Methods',['GET','POST','PUT','DELETE'])
    next()
}) */

app.use('/signin',auth,signin)
app.use('/login',login)
app.use('/user',auth,userRoute)

app.use('/*',(req,res,next) => {
    return res.status(404).send({
        mensagem:"Página não encontrada"
    })
})

app.listen(port,() => console.log(`server online on port:${port}`))