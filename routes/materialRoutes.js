const express = require('express');
const router = express.Router();
const materialController = require('../controllers/materialController');

router.get('/produtos', materialController.listarMateriais);

router.post('/produtos', materialController.criarMaterial);

router.get('/produtos/busca', materialController.buscarMaterial);

router.put('/produtos/:id/estoque', materialController.atualizarEstoque);

module.exports = router;
