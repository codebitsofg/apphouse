import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
  background-color: #0f0e0e;
  z-index: 5;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  color: #f2f2f2;
  font-size: 5rem;
`;
