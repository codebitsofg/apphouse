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

  ${mediaLarge(css`
    display: block;
  `)}
`;

export const Circle = styled(motion.div)<CircleProps>(
  ({ isHovered }) => css`
    width: 1vw;
    height: 1vw;
    background-color: #141414;
    border-radius: 100%;
    transition: all ease-in-out 0.3s;
  `
);
