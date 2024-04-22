const express = require('express');
const bodyParser = require('body-parser');
const pricingRoutes = require('./routes/pricingRoutes');
const errorHandler = require('./middlewares/errorMiddleware');
const app = express();

app.use(bodyParser.json());
app.use('/api/v1/pricing', pricingRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
