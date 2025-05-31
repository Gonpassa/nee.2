import { IEntry } from 'src/queries/types/journal';
import { entry_card_container } from '../Journal/styles';
import { isEven } from '../../../utils/isEven';
import { FC } from 'react';
import { SlideDirection } from '../types';
import { JournalEntryCard } from '../JournalEntryCard/JournalEntryCard';

interface JournalEntriesContainerProps {
  entriesArray: IEntry[][];
}

const JournalEntriesContainer: FC<JournalEntriesContainerProps> = ({ entriesArray }) => {
  return (
    <div css={entry_card_container}>
      {entriesArray.map((entries, index) => {
        const even = isEven(index);
        const slideDirection = even ? SlideDirection.LEFT : SlideDirection.RIGHT;
        return (
          <>
            {entries.map((entry) => (
              <JournalEntryCard key={entry.id} entry={entry} slideDirection={slideDirection} />
            ))}
          </>
        );
      })}
    </div>
  );
};

export default JournalEntriesContainer;
