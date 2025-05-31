import { IUser } from '../models/User';
import { Request } from 'express';

export interface AuthenticatedRequest extends Request {
  body: {
    user: IUser;
  };
}
