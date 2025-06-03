let vendas = [];

exports.listarVendas = () => vendas;

exports.criarVenda = (venda) => {
  venda.id = vendas.length + 1;
  venda.estado = 'pendente'; 
  vendas.push(venda);
  return venda;
};

exports.getEstado = (id) => {
  const venda = vendas.find(v => v.id === id);
  return venda ? venda.estado : null;
};

exports.atualizarEstado = (id, novoEstado) => {
  const venda = vendas.find(v => v.id === id);
  if (!venda) return null;

  const estadosValidos = ['pendente', 'confirmada', 'cancelada', 'finalizada'];
  if (!estadosValidos.includes(novoEstado)) return false;

  venda.estado = novoEstado;
  return venda;
};
