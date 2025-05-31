import { FC } from 'react';
import { useJournalResponse } from '../hooks/useJournalResponse';
import { IEntry } from '../../../queries/types/journal';
import last from 'lodash/fp/last';
import JournalEntriesContainer from '../JournalEntriesContainer/JournalEntriesContainer';

const Journal: FC = () => {
  const journalResponse = useJournalResponse();
  const entriesArray: IEntry[][] = journalResponse.entries.reduce<IEntry[][]>((acc, entry) => {
    const lastEntry = last(acc);
    if (lastEntry && lastEntry.length < 3) {
      lastEntry.push(entry);
    } else {
      acc.push([entry]);
    }
    return acc;
  }, []);

  return <JournalEntriesContainer entriesArray={entriesArray} />;
};

export default Journal;
