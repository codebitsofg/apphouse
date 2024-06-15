import { mediaLarge } from "@/utils/media";
import styled, { css } from "styled-components";
export const Container = styled.div`
  display: flex;
  width: 100%;
  font-size: 0.7rem;
  font-weight: 300;
  margin-bottom: 4%;

  ${mediaLarge(css`
    width: 80%;
    font-size: 0.9rem;
    margin-bottom: 0.8%;
  `)}
`;

export const Point = styled.span`
  flex: 1;
`;

export const HighLight = styled.span`
  font-weight: 400;
`;
