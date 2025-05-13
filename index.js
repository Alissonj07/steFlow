const express = require('express');
const app = express();
const materialRoutes = require('./routes/materialRoutes');
const estoqueRoutes = require('./routes/estoqueRoutes');

app.use(express.json());

app.use('/api', materialRoutes);
app.use('/api', estoqueRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}!`);
});
