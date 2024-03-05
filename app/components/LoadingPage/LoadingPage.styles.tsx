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
  z-index: 99;
  background-color: pink;
`;
