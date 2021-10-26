// {
//     "author": "Chinua Achebe",
//     "language": "English",
//     "image": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
//     "title": "Things Fall Apart",
//         "year": 1958,
//         "price":450
//   }

const { Schema, model } = require("mongoose");

const BooksSchema = Schema({
  author: {
    type: String,
    required: [true, "Please add author name"],
  },
  language: String,
  image: String,
  title: {
    type: String,
    required: [true, "please add title"],
    unique: true,
  },
  year: Number,
  price: {
    type: Number,
    min: [1, "set minimal price"],
    max: [5000, "set maximum price"],
  },
  inStock: {
    type: Boolean,
    default: false,
  },
}, {versionKey: false, timestamps: true})

const Book = model('book', BooksSchema)

module.exports = Book
