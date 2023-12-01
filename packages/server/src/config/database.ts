require('dotenv').config();

const config = {
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  dialect: 'mariadb',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  define: {
    timestamps: true,
    underscored: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at',
  },
  timezone: 'America/Sao_Paulo',
};

module.exports = config;
