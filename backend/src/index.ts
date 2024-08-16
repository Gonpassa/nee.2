import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './database';

dotenv.config({ path: __dirname + '/config/.env' });
connectDB({ URI: process.env.DB_STRING || 'mongodb://127.0.0.1:27017/myapp' });

const app = express();

app.get('/', (req, res) => {
  console.log(req);
  res.send(JSON.stringify({ message: 'Hello World' }));
});

const PORT = process.env.PORT || 3000;

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
