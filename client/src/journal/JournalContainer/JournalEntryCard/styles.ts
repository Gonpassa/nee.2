import { css } from '@emotion/react';

export const slide_from_left = css`
  animation: slide_from_left 1.5s ease;
  @keyframes slide_from_left {
    from {
      transform: translateX(-300%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

export const slide_from_right = css`
  animation: slide_from_right 1.5s;
  @keyframes slide_from_right {
    from {
      transform: translateX(300%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

export const card = css`
  min-height: 300px;

  &.slide_from_left {
    ${slide_from_left}
  }

  &.slide_from_right {
    ${slide_from_right}
  }
`;
