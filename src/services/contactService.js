const crypto = require('crypto');
const { withFutureDatabase } = require('../db');

const submitContactRequest = async ({ name, email, subject, message }) => {
  await withFutureDatabase();
  return {
    ticket: crypto.randomUUID(),
    name,
    email,
    subject,
    message,
    receivedAt: new Date().toISOString(),
  };
};

module.exports = {
  submitContactRequest,
};
