import { mediaLarge } from "@/utils/media";
import styled, { css } from "styled-components";
export const Container = styled.div`
  display: flex;
  width: 100%;
  font-size: 0.9rem;
  font-weight: 300;
  margin-bottom: 0.8%;

  ${mediaLarge(css`
    width: 80%;
  `)}
`;

export const Point = styled.span`
  flex: 1;
`;

export const HighLight = styled.span`
  font-weight: 400;
`;
