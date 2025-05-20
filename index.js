const express = require('express');
const app = express();
const materialRoutes = require('./routes/materialRoutes');
const estoqueRoutes = require('./routes/estoqueRoutes');
const contasPagarRoutes = require('./routes/contasPagarRoutes');
const contasReceberRoutes = require('./routes/contasReceberRoutes');

app.use(express.json());

app.use('/api', materialRoutes);
app.use('/api', estoqueRoutes);
app.use('/api', contasPagarRoutes);
app.use('/api', contasReceberRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}!`);
});
