let funcionarios = [
  { id: 1, nome: 'Ana Silva', cargo: 'Vendedora', salario: 2500 },
  { id: 2, nome: 'João Souza', cargo: 'Estoquista', salario: 2000 }
];

exports.listarFuncionarios = (req, res) => {
  res.json(funcionarios);
};

exports.criarFuncionario = (req, res) => {
  const novoFuncionario = req.body;
  novoFuncionario.id = funcionarios.length + 1;
  funcionarios.push(novoFuncionario);
  res.status(201).json(novoFuncionario);
};

exports.atualizarFuncionario = (req, res) => {
  const id = parseInt(req.params.id);
  const funcionario = funcionarios.find(f => f.id === id);
  if (!funcionario) {
    return res.status(404).json({ mensagem: 'Funcionário não encontrado' });
  }
  Object.assign(funcionario, req.body);
  res.json(funcionario);
};

exports.deletarFuncionario = (req, res) => {
  const id = parseInt(req.params.id);
  const index = funcionarios.findIndex(f => f.id === id);
  if (index === -1) {
    return res.status(404).json({ mensagem: 'Funcionário não encontrado' });
  }
  funcionarios.splice(index, 1);
  res.status(204).send();
};
