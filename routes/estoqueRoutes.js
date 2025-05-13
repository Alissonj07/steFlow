const express = require('express');
const router = express.Router();
const estoqueController = require('../controllers/estoqueController');

router.get('/estoque', estoqueController.listarEstoque);

module.exports = router;
