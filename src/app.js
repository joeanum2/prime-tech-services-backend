const express = require('express');
const cors = require('cors');

const config = require('./config/env');
const apiRouter = require('./routes/api');

const app = express();

app.disable('x-powered-by');
app.use(express.json());
app.use(
  cors({
    origin: config.corsOrigin,
    methods: ['GET', 'POST', 'OPTIONS'],
  })
);

app.use('/api', apiRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    error: 'Unexpected server error. Please try again later.',
  });
});

module.exports = app;
