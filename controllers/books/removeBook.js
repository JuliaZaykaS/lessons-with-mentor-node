const Book = require('../../models/Books/Books')

const removeBook = async (req, res) => {
    const { id } = req.params
    const result = await Book.findByIdAndDelete(id)
    return res.status(200).json({data:result, message: 'success'})
    // console.log('removeBook')
}

module.exports = removeBook