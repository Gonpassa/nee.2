import { createLazyFileRoute } from '@tanstack/react-router';
import { JournalContainer } from '../journal/JournalContainer/JournalContainer';
import { PageContainer } from '../components/PageContainer';

export const Route = createLazyFileRoute('/journal')({
  component: Journal,
});

function Journal() {
  return (
    <PageContainer>
      <JournalContainer />
    </PageContainer>
  );
}
