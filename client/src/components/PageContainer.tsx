import { Container } from "@mui/material"
import { FC, PropsWithChildren } from "react"
import { css } from "@emotion/react"

export const PageContainer: FC<PropsWithChildren> = ({children}) => {
  return (
    <Container css={css`overflow: hidden`}>
      {children}
    </Container>
  )
}