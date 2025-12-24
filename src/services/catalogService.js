const { services, products } = require('../data/catalog');
const { withFutureDatabase } = require('../db');

const listServices = async () => {
  // Placeholder for fetching from PostgreSQL later via withFutureDatabase helper.
  await withFutureDatabase();
  return services;
};

const listProducts = async () => {
  await withFutureDatabase();
  return products;
};

module.exports = {
  listServices,
  listProducts,
};
