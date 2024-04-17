import { opacityConfig } from "@/utils/animationConfig";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div).attrs({
  ...opacityConfig,
})`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;
  background-color: #f7f9f5;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: #0f0e0e;
`;

export const PreloaderText = styled.span`
  font-size: 0.8rem;
`;

export const Progress = styled.span`
  font-size: 8rem;
`;

export const LoadingTitle = styled.h4`
  font-weight: 400;
`;

export const Dot = styled(motion.span).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: {
    duration: 1,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "linear",
  },
})`
  width: 1rem;
  height: 1rem;
  display: inline-block;
  background-color: #ed1c24;
  border-radius: 100%;
`;
