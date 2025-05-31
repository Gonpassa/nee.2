import { IApiRequestTypes } from './apiTypes';

export const endPoints: { [k in IApiRequestTypes]: string } = {
  base: '',
  journal: '/journal',
};

export const getUrl = (type: IApiRequestTypes, params?: string) =>
  !params ? endPoints[type] : endPoints[type] + params;
