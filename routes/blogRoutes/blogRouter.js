const express = require('express')
const router = express.Router()
const blogController =  require('../../controller/blogController')


router.post('/add-blog',blogController.blogAdd)

module.exports = router