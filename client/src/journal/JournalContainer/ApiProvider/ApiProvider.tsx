import { BaseApiProvider, IChildrenWithApiResponse } from '../../../components/BaseApiProvider';
import { ApiContext } from './Context';
import { IAllApiResponses } from './types';

export const ApiProvider = (props: IChildrenWithApiResponse<IAllApiResponses>) => {
  return <BaseApiProvider ApiContext={ApiContext} {...props} />;
};
