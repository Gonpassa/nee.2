import { Response } from 'express';
import { AuthenticatedRequest } from '../types/request';

export const getLogin = async (req: AuthenticatedRequest, res: Response) => {
  if (req.user) {
    return res.redirect('/');
  }
  res.render('login', { title: 'Login' });
};
