const Book = require("../model/books");

module.exports.addBook = async (req, res) => {
  try {
    const { bookISBN, bookTitle, bookAuthor, price } = req.body;
    const newBook = await new Book({ bookISBN, bookAuthor, bookTitle, price }).save();
    res.status(201).send({ msg: "Book Added", newBook });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    if (books != null) res.status(200).send(books);
    else
      res.status(201).send({ message: "No Books are present to be displayed" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
