const Book = require('../../models/Books/Books')

const createBook = async (req, res) => {
    console.log(req.body);
    const result = await Book.create(req.body)
    // console.log('createBook')
    return res.status(201).json({data:result, message: 'success'})
}

module.exports = createBook