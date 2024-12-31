require('dotenv').config();

module.exports = {
  port: process.env.PORT || 5000,
  database: {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    name: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN
  },
  uploadDir: 'uploads/',
  maxFileSize: 5 * 1024 * 1024, // 5MB
}; 