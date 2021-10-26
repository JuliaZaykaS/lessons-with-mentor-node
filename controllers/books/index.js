const getBooks=require('./getBooks')
const getSingleBook=require('./getSingleBook')
const createBook=require('./createBook')
const updateBook=require('./updateBook')
const removeBook = require('./removeBook')

module.exports = {
    getBooks, getSingleBook, createBook,
    updateBook, removeBook
}