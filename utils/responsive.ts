import { css } from "styled-components";

export default (breakpoint: string, styles: string | any) => css`
  @media screen and (min-width: ${breakpoint}) {
    ${styles}
  }
`;
