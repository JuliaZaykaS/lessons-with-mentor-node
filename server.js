const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { engine } = require('express-handlebars')
const authRouter = require('./routes/auth')
dotenv.config({
    path: './config/.env'
})
const connectDB = require('./config/db')
const User = require('./model/user')
const sendMail = require('./services/email')



const {PORT}= process.env
const app = express()

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
// app.set("views", "./views");

const urlEncodedParcer = express.urlencoded({ extended: false })
app.use(urlEncodedParcer)


app.use(express.json())
app.use(cors())

app.get('/contacts', async (req, res) => {

    return res.render('send')
})
app.post('/send', async (req, res) => {
    // console.log(req.body);
    await sendMail(req.body, res)
    // return res.render('send', {msg: 'form is sended'})
})

app.use('/', authRouter)

connectDB()

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

process.on('unhandledRejection', (error, _) => {
    if (error) {
        console.log(error.message)
        server.close(() => {
            return process.exit(1)
        })
    }

})