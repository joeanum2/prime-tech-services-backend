const app = require('./app');
const config = require('./config/env');

const server = app.listen(config.port, '0.0.0.0', () => {
  console.log(
    `Prime Tech Services API running at ${config.baseUrl} on port ${config.port}`
  );
});

module.exports = server;
