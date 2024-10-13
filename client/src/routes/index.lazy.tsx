import { css } from '@emotion/react'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div css={css`padding: 2rem;`}>
      <h3>Welcome Home!</h3>
    </div>
  )
}