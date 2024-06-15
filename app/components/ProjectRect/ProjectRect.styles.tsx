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
    height: 25vw;
    background-color: #f7f9f5;
    color: #04080f;
    font-weight: 100;
    font-size: 0.8rem;
    border-radius: 4px;
    position: absolute;
    align-items: center;
    justify-content: space-around;
    display: flex;
    flex-direction: column;
    transform-origin: center;
    cursor: pointer;

    ${mediaLarge(css`
      width: 12vw;
      height: 12vw;
    `)}
  `
);

export const Text = styled.span`
  pointer-events: none;
  font-weight: 300;
  font-size: 0.6rem;

  ${mediaLarge(css`
    font-size: 0.7rem;
  `)}
`;
