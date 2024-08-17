import { Request, Response } from 'express';
import { IUser } from '../models/User';
interface AuthenticatedRequest extends Request {
  user?: IUser;
}
export const getLogin = async (req: AuthenticatedRequest, res: Response) => {
  if (req.user) {
    return res.redirect('/');
  }
  res.render('login', { title: 'Login' });
};
