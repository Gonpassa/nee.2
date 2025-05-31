import { ReactNode, useMemo } from 'react';
import { Context } from 'use-context-selector';

import { ChildrenAggressiveMemo } from './ChildrenAggressiveMemo';

export type IChildrenWithApiResponse<TApiResponses> = {
  children?: ReactNode;
} & TApiResponses;

export type IBaseApiProviderProps<TApiResponses> = {
  ApiContext: Context<TApiResponses>;
} & IChildrenWithApiResponse<TApiResponses>;

export function BaseApiProvider<TApiResponses>({
  ApiContext,
  children,
  ...responses
}: IBaseApiProviderProps<TApiResponses>) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const value = useMemo(() => responses, [...Object.values(responses)]) as TApiResponses;
  return (
    <ApiContext.Provider value={value}>
      <ChildrenAggressiveMemo>{children}</ChildrenAggressiveMemo>
    </ApiContext.Provider>
  );
}
