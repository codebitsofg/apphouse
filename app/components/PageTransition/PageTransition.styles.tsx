import { opacityConfig } from "@/utils/animationConfig";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div).attrs({
  exit: { opacity: 0 },
})`
  position: fixed;
  opacity: 0;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
  background-color: white;
  z-index: 105;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  color: #f2f2f2;
  transform-origin: bottom;
  font-size: 5rem;

  svg {
    width: 10%;
  }
`;

export const TransitioningOverlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: #04080f;
  transform-origin: bottom;
`;

export const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
`;
