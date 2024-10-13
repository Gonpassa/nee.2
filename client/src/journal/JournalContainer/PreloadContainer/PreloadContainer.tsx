import { FC, ReactElement } from "react";
import { IAllApiResponses } from "../ApiProvider/types";
import { useJournalQuery } from "../../../queries/journal";

interface PreloadContainerProps {
  children: (props: IAllApiResponses) => ReactElement
}
 
const PreloadContainer: FC<PreloadContainerProps> = ({children}) => {
  const {data: journalResponse, isLoading} = useJournalQuery({ userId: '6440756fced34834f428f480' });

  if(isLoading) return <div>Loading...</div>
  if(journalResponse) {
    return children({ journalResponse });
  }
  return <div>Something went wrong</div>
}
 
export default PreloadContainer;