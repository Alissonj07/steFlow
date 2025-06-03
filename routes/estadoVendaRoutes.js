const express = require('express');
const router = express.Router();
const estadoVendaController = require('../controllers/estadoVendaController');

router.get('/vendas/:id/estado', (req, res) => {
  const id = parseInt(req.params.id);
  const estado = estadoVendaController.getEstado(id);
  if (estado === null) {
    return res.status(404).json({ mensagem: 'Venda não encontrada' });
  }
  res.json({ estado });
});

router.put('/vendas/:id/estado', (req, res) => {
  const id = parseInt(req.params.id);
  const { estado } = req.body;
  const resultado = estadoVendaController.atualizarEstado(id, estado);
  if (resultado === null) {
    return res.status(404).json({ mensagem: 'Venda não encontrada' });
  }
  if (resultado === false) {
    return res.status(400).json({ mensagem: 'Estado inválido' });
  }
  res.json(resultado);
});

module.exports = router;
