const dotenv = require('dotenv');

dotenv.config();

const requiredKeys = ['PUBLIC_BASE_URL', 'CORS_ORIGIN', 'PORT'];
const missingKeys = requiredKeys.filter((key) => !process.env[key]);

if (missingKeys.length > 0) {
  throw new Error(
    `Missing required environment variables: ${missingKeys.join(', ')}.`
  );
}

const port = Number(process.env.PORT);

if (Number.isNaN(port)) {
  throw new Error('PORT must be a valid number.');
}

module.exports = {
  baseUrl: process.env.PUBLIC_BASE_URL,
  corsOrigin: process.env.CORS_ORIGIN,
  port,
};
