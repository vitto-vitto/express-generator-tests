const express = require('express'),
  router = express.Router(),
  userController = require('../controllers/products')

  router.get('/', userController.index)

  module.exports = router