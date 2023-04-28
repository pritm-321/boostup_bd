const router = require('express').Router()

const { addBook } =require('../controller/index.route')
const { getAllBooks } =require('../controller/index.route')

router.post('/addBook',addBook)
router.get('/getAllBooks',getAllBooks)

module.exports = router
