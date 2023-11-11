require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const app = express();

app.use(cors());

// Init routes
require('./routes')(app);

app.get('/', (req, res) => {
    const result = {};
    result.code = res.statusCode;
    res.json(result);
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
