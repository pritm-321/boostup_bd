const router = require('express').Router()

const { addBook } =require('../controller/index.route')
const { getAllBooks } =require('../controller/index.route')
const { deleteBookById } =require('../controller/index.route')

router.post('/addBook',addBook)
router.get('/getAllBooks',getAllBooks)
router.delete('/deleteBookById',deleteBookById)

module.exports = router
