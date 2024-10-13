/* eslint-disable @typescript-eslint/no-empty-object-type */
import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {}
}

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface DOMAttributes<T> {
    css?: import('@emotion/react').SerializedStyles
  }
}
