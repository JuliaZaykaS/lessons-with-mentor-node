const Book = require('../../models/Books/Books')

const updateBook = async (req, res) => {
    const { id } = req.body
    const result = await Book.findByIdAndUpdate(id, { ...req.body }, { new: true, runValidators: true })
    return res.status(200).json({data:result, message: 'success'})
    // console.log('updateBook')
}

module.exports = updateBook
