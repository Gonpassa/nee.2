import { NextFunction } from 'express';
import { AuthenticatedRequest } from '../types/request';
import { Response } from 'express';

export const ensureAuth = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/');
  }
};
