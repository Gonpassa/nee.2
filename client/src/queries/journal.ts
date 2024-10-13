import { QueryOptions, useQuery, UseQueryResult } from "@tanstack/react-query";
import { IJournalRequest, IJournalResponse } from "./types/journal";
import { api } from "../api";

const journalQueryKey = (userId: string) => ['journal', userId];
type JournalQueryKey = ReturnType<typeof journalQueryKey>;

const fetchJournal = async (journalRequest: IJournalRequest): Promise<IJournalResponse | undefined> => {
    const response = await api('GET', 'journal', { data: journalRequest });
    return response;
}

export const useJournalQuery = (journalRequest: IJournalRequest, options?: QueryOptions): UseQueryResult<IJournalResponse> => {
  const queryKey: JournalQueryKey = journalQueryKey(journalRequest.userId);
  return useQuery({
    queryKey,
    queryFn: () => fetchJournal(journalRequest),
    ...options,
  });
}