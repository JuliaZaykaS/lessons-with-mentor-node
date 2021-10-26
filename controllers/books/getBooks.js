const Book = require('../../models/Books/Books')

const getBooks = async (req, res) => {
    // const result = await Book.find({}).exec()
    const result = await Book.find({})
    // console.log('getBooks')
    console.log(result)
    return res.status(200).json({data:result, message: 'success'})
}

module.exports = getBooks