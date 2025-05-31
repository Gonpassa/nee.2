import { createContext } from 'use-context-selector';
import { IAllApiResponses } from './types';

export const ApiContext = createContext({} as IAllApiResponses);
