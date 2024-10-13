import express from 'express';
import config from './config/default';
import { connectDB } from './database';
import path from 'path';
import cors from 'cors';
import journalRoutes from './routes/journalRoutes';

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../../client/dist')));
app.use('/journal', journalRoutes);

app.get('/', (req, res) => {
  // Need to serve the index.html file for react root.
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
