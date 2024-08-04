import { mediaLarge } from "@/utils/media";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";

interface IBox {
  top: string;
  left: string;
}

export const Container = styled(motion.div).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, delay: 0.5 },
})<IBox>(
  ({ top, left }) => css`
    top: ${top};
    left: ${left};
    width: 25vw;
    z-index: 99;
    cursor: pointer;
    height: 25vw;
    border-radius: 4px;
    position: absolute;
    transform-origin: center;
    align-items: center;
    background-color: #0c0c0d;
    ${mediaLarge(css`
      width: 14vw;
      height: 11vw;
    `)}
  `
);

export const BgImage = styled.img`
  width: 70%;
  height: 70%;
  object-fit: contain;
  top: 0;
  left: 0;
`;

export const Overlay = styled(motion.div)`
  background-color: #141414;
  opacity: 0.6;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
`;

export const Text = styled.span`
  pointer-events: none;
  font-weight: 300;
  color: #bac4b8;
  user-select: none;
  font-size: 0.9rem;
  ${mediaLarge(css`
    font-size: 0.8rem;
  `)}
`;
