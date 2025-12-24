const { Pool } = require('pg');

let pool;

const getPool = () => {
  if (pool) {
    return pool;
  }

  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    // For now we just delay database initialization until credentials exist.
    console.warn('DATABASE_URL is not set. PostgreSQL calls are skipped.');
    return null;
  }

  pool = new Pool({ connectionString });
  return pool;
};

const withFutureDatabase = async () => {
  const activePool = getPool();
  if (activePool) {
    await activePool.query('SELECT 1');
  }
};

module.exports = {
  getPool,
  withFutureDatabase,
};
