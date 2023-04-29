const router = require('express').Router()

const { addBook,getAllBooks,deleteBookById } =require('../controller/index.route')
const { register, login } = require('../controller/user.route')
const { verifyToken } = require('../middlewares/verifyToken')

router.post('/addBook', verifyToken, addBook)
router.get('/getAllBooks',getAllBooks)
router.delete('/deleteBookById/:id', verifyToken, deleteBookById)

router.post('/register', register)
router.post('/login', login)

module.exports = router