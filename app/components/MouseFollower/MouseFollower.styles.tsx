import { mediaLarge } from "@/utils/media";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";

interface CircleProps {
  isHovered: boolean;
}
export const Container = styled(motion.div)`
  position: fixed;
  z-index: 99;
  pointer-events: none;
  display: none;

  ${mediaLarge(css`
    display: block;
  `)}
`;

export const Circle = styled(motion.div)<CircleProps>(
  ({ isHovered }) => css`
    width: 3vw;
    height: 3vw;
    border-radius: 50%;
    border: 1px solid gray;
    transition: all ease-in-out 0.3s;
    scale: ${isHovered ? 0.6 : 1};

    ${isHovered &&
    css`
      background-color: #0f0e0e;
      scale: 1.2;
      border: 6px solid white;
    `}
  `
);
