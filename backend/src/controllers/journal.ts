import { Entry } from '../models/Entry';
import { AuthenticatedRequest } from '../types/request';

export class JournalController {
  static async getJournal(req: AuthenticatedRequest, res: any) {
    try {
      const entries = await Entry.find({ userId: req.user.id }).sort({ year: -1, month: -1, day: -1 }).lean();
      return res.json({ entries });
    } catch (error) {
      return res.status(500).json({ error, message: 'Failed to get journal entries' });
    }
  }
}
