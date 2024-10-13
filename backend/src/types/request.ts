import { IUser } from '../models/User';
import { Request } from 'express';

export interface AuthenticationRequest extends Request {
  user?: IUser;
}

export interface AuthenticatedRequest extends Request {
  user: IUser;
}
