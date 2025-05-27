const express = require('express');
const router = express.Router();
const funcionariosController = require('../controllers/funcionariosController');

router.get('/funcionarios', funcionariosController.listarFuncionarios);
router.post('/funcionarios', funcionariosController.criarFuncionario);
router.put('/funcionarios/:id', funcionariosController.atualizarFuncionario);
router.delete('/funcionarios/:id', funcionariosController.deletarFuncionario);

module.exports = router;
