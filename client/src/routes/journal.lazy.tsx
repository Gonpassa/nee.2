import { createLazyFileRoute } from '@tanstack/react-router'
import { JournalContainer } from '../journal/JournalContainer/JournalContainer'

export const Route = createLazyFileRoute('/journal')({
  component: Journal,
})

function Journal() {
  return (
   <JournalContainer />
  )
}