const express = require('express')
const { colors } = require('./helpers')
const connectDB = require('./config/db')

//load env variables
require('dotenv').config({
    path:'./config/config.env'
})


//init application
const app = express()
//json body parser
app.use(express.json())

//route files
const booksRouter = require('./routes/books')
//mount routes
app.use('/api/v1/books', booksRouter)

const {PORT, NODE_ENV}=process.env

//connect to Database
connectDB()
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT} in ${NODE_ENV} mode`.cyan.bold.bgGray))
process.on('unhandledRejection', (error,_) => {
    console.log(`error message: ${error.message}`.red)
    server.close(()=>process.exit(1))
})