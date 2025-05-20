let contasReceber = [
  { id: 1, descricao: 'Cliente A', valor: 1200.00, vencimento: '2025-06-05', pago: false },
  { id: 2, descricao: 'Cliente B', valor: 800.00, vencimento: '2025-06-15', pago: false }
];

exports.listarContasReceber = (req, res) => {
  res.json(contasReceber);
};

exports.criarContaReceber = (req, res) => {
  const novaConta = req.body;
  novaConta.id = contasReceber.length + 1;
  contasReceber.push(novaConta);
  res.status(201).json(novaConta);
};

exports.atualizarStatusContaReceber = (req, res) => {
  const id = parseInt(req.params.id);
  const { pago } = req.body;

  const conta = contasReceber.find(c => c.id === id);
  if (!conta) {
    return res.status(404).json({ mensagem: 'Conta a receber não encontrada' });
  }

  conta.pago = pago;
  res.status(200).json(conta);
};
