import { memo, PropsWithChildren } from 'react';

const ChildrenComponent = ({children}: PropsWithChildren<{}>) => <>{children}</>
export const ChildrenAggressiveMemo = memo(ChildrenComponent, () => true)
