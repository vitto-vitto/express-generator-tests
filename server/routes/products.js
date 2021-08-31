const express = require('express'),
  router = express.Router(),
  productsController = require('../controllers/products')

  router.get('/', productsController.index)
  router.get('/:nomeProduto', productsController.show)

  module.exports = router