const router = require('express').Router()

const { getBooks, getSingleBook, createBook,
    updateBook, removeBook} = require('../controllers/books')

router.route('/').get(getBooks)
router.route('/:id').get(getSingleBook)
router.route('/').post(createBook)
router.route('/:id').put(updateBook)
router.route('/:id').delete(removeBook)

module.exports = router