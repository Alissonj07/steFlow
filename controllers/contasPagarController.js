let contasPagar = [
  { id: 1, descricao: 'Fornecedor A', valor: 1000.00, vencimento: '2025-06-01', pago: false },
  { id: 2, descricao: 'Fornecedor B', valor: 500.00, vencimento: '2025-06-10', pago: false }
];

exports.listarContasPagar = (req, res) => {
  res.json(contasPagar);
};

exports.criarContaPagar = (req, res) => {
  const novaConta = req.body;
  novaConta.id = contasPagar.length + 1;
  contasPagar.push(novaConta);
  res.status(201).json(novaConta);
};

exports.atualizarStatusContaPagar = (req, res) => {
  const id = parseInt(req.params.id);
  const { pago } = req.body;

  const conta = contasPagar.find(c => c.id === id);
  if (!conta) {
    return res.status(404).json({ mensagem: 'Conta a pagar não encontrada' });
  }

  conta.pago = pago;
  res.status(200).json(conta);
};
