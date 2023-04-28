const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    bookISBN: {
      type: String,
      required: true,
      unique: true,
    },
    bookTitle: {
      unique: true,
      type: String,
      required: true,
      min: 5,
    },
    bookAuthor: {
      type: String,
      required: true,
      min: 4,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("book", bookSchema);
