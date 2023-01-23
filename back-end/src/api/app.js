const express = require('express');
const router = require('../routes');
const cors = require('cors')

const app = express();

app.use(cors())

app.use(express.json());
app.use(router);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
