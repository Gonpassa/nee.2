import express from 'express';
import { JournalController } from '../controllers/journal';

const router = express.Router();

router.post('/', JournalController.getJournal);

export default router;
