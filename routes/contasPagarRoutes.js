const express = require('express');
const router = express.Router();
const contasPagarController = require('../controllers/contasPagarController');

router.get('/contas-pagar', contasPagarController.listarContasPagar);
router.post('/contas-pagar', contasPagarController.criarContaPagar);
router.put('/contas-pagar/:id/status', contasPagarController.atualizarStatusContaPagar);

module.exports = router;
