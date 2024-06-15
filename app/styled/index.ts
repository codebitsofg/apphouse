import { mediaLarge } from "@/utils/media";
import styled, { css } from "styled-components";

export const Container = styled.div``;

export const LogoContainer = styled.div`
  position: fixed;
  top: 2%;
  left: 1%;
  opacity: 0.7;
  z-index: 2;
  width: 15%;
  height: 15%;

  ${mediaLarge(css`
    width: 5%;
    height: 5%;
  `)}
`;
