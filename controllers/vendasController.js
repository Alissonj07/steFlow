let vendas = [];

exports.listarVendas = (req, res) => {
  res.json(vendas);
};

exports.criarVenda = (req, res) => {
  const venda = req.body;
  venda.id = vendas.length + 1;
  vendas.push(venda);
  res.status(201).json(venda);
};
