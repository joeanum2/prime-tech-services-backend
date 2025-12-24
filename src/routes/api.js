const express = require('express');

const { listServices, listProducts } = require('../services/catalogService');
const { submitContactRequest } = require('../services/contactService');
const config = require('../config/env');

const router = express.Router();

router.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    uptimeSeconds: process.uptime(),
    baseUrl: config.baseUrl,
    timestamp: new Date().toISOString(),
  });
});

router.get('/services', async (req, res, next) => {
  try {
    const services = await listServices();
    res.json({ count: services.length, services });
  } catch (error) {
    next(error);
  }
});

router.get('/products', async (req, res, next) => {
  try {
    const products = await listProducts();
    res.json({ count: products.length, products });
  } catch (error) {
    next(error);
  }
});

router.post('/contact', async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        error:
          'name, email, and message are required to submit a contact request.',
      });
    }

    const payload = await submitContactRequest({ name, email, subject, message });

    res.status(202).json({
      message: 'Contact request received. Our engineers will respond shortly.',
      request: payload,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
