import { FC } from "react";
import PreloadContainer from "./PreloadContainer/PreloadContainer";
import { ApiProvider } from "./ApiProvider/ApiProvider";
import Journal from "./Journal/Journal";

 
export const JournalContainer: FC = () => {
  return (
    <PreloadContainer>
      {(data) =>
        <ApiProvider {...data}>
          <Journal />
        </ApiProvider>}
    </PreloadContainer> 
  )
  ;
}
 