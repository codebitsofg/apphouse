import { mediaLarge } from "@/utils/media";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";

interface CircleProps {
  isHovered: boolean;
}
export const Container = styled(motion.div)`
  position: fixed;
  z-index: 103;
  pointer-events: none;
  display: none;

  ${mediaLarge(css`
    display: block;
  `)}
`;

export const Circle = styled(motion.div)<CircleProps>(
  ({ isHovered }) => css`
    width: 1vw;
    height: 1vw;
    border: 1px solid gray;
    transition: all ease-in-out 0.3s;
    background-color: #04080f;
    scale: ${isHovered ? 0.6 : 1};

    ${isHovered &&
    css`
      background-color: #04080f;
      scale: 1.2;
      border: 9px solid white;
    `}
  `
);
