const express = require('express');
const router = express.Router();
const contasReceberController = require('../controllers/contasReceberController');

router.get('/contas-receber', contasReceberController.listarContasReceber);
router.post('/contas-receber', contasReceberController.criarContaReceber);
router.put('/contas-receber/:id/status', contasReceberController.atualizarStatusContaReceber);

module.exports = router;
