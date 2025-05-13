exports.listarEstoque = (req, res) => {
  const estoque = tenis.map(t => ({
    nome: t.nome,
    quantidadeEstoque: t.quantidadeEstoque
  }));
  res.status(200).json(estoque);
};
