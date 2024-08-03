import { mediaLarge } from "@/utils/media";
import styled, { css } from "styled-components";

export const Container = styled.div``;

export const LogoContainer = styled.div`
  position: fixed;
  top: 3.5%;
  left: 2%;
  opacity: 0.8;
  z-index: 2;
  width: 15%;
  height: 15%;

  ${mediaLarge(css`
    width: 7%;
    height: 7%;
  `)}
`;
