import { useContextSelector } from "use-context-selector"
import { ApiContext } from "../ApiProvider/Context"

export const useJournalResponse = () => {
  return useContextSelector(ApiContext, (context) => context.journalResponse)
}