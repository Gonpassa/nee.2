import dotenv from 'dotenv';

export default {
  mongoURI: process.env.DB_STRING || 'mongodb://localhost:27017/express-mongo',
  port: process.env.PORT || 3000,
};
