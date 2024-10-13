import { FC } from "react";
import { useJournalResponse } from "../hooks/useJournalResponse";

 
const Journal: FC= () => {
  const journalResponse = useJournalResponse();
  console.log("🚀 ~ journalResponse:", journalResponse)
  return ( <div>Journal responses: 
    <div>
      {journalResponse.entries.map((entry) => entry.title)}
    </div>
  </div> );
}
 
export default Journal;