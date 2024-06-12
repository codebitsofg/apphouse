import { opacityConfig } from "@/utils/animationConfig";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  align-self: stretch;
  box-sizing: border-box;
  padding-right: 1vw;
  overflow: hidden;
  border-radius: 5px;
`;

export const Gif = styled(motion.img).attrs({
  ...opacityConfig,
  transition: { duration: 0.4 },
})`
  width: 100%;
  box-shadow: 0 0 10px #04080f20;
  height: auto;
  object-position: top;
  border-radius: 5px;
`;
