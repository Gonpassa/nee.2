import express from 'express';
import config from './config/default';
import { connectDB } from './database';

connectDB();

const app = express();

app.use(express.json());

app.get('*', (req, res) => {
  // Need to serve the index.html file for react root.
  res.send({ message: 'Hello world' });
});

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
