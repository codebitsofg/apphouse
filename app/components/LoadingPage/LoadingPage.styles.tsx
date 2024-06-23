import { opacityConfig } from "@/utils/animationConfig";
import { mediaLarge } from "@/utils/media";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import css from "styled-jsx/css";

export const Container = styled(motion.div).attrs({
  ...opacityConfig,
  transition: {
    duration: 0.3,
  },
})`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: #04080f;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: #f7f9f5;
`;

export const PreloaderText = styled.span`
  font-size: 0.8rem;
`;

export const Progress = styled.span`
  font-size: 8rem;
`;

export const LoadingBar = styled.div`
  font-weight: 400;
  height: 5px;
  border-radius: 5px;
  background-color: slategray;
  flex: 1;
  position: relative;
`;

export const ProgressBar = styled.div`
  height: 100%;
  border-radius: 5px;
  background-color: #f7f9f5;
  transition: all ease-in 0.3s;
`;

export const LoadingBarContainer = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1%;
`;

export const WelcomeTextContainer = styled(motion.div).attrs({
  ...opacityConfig,
  transition: {
    duration: 0.5,
  },
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 2% 2%;
  position: relative;
  z-index: 2;
`;

export const WelcomeText = styled.h1`
  display: inline-block;
  font-size: 2rem;
  font-weight: 300;
`;

export const OptionContainer = styled(motion.div).attrs({
  ...opacityConfig,
  transition: {
    duration: 0.5,
  },
})`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1%;
  color: #f7f9f5;
`;
export const ModeOption = styled(motion.div)`
  border: 1px #102541 solid;
  border-radius: 4px;
  font-weight: 200;
  width: 25vw;
  height: 25vw;
  margin-right: 3%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in-out all;
  background-color: #f7f9f5;
  color: #0f0e0e;
  cursor: pointer;

  &:hover {
    background-color: #0f0e0e;
    color: #f7f9f5;
    border-color: #9dbde7;
    box-shadow: 0 0 50px #9dbde760;
  }

  ${mediaLarge(css`
    width: 12vw;
    height: 12vw;
  `)}
`;

export const InnerOptionContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2%;
`;

export const SelectModeText = styled(motion.h1).attrs({
  ...opacityConfig,
  transition: {
    duration: 0.5,
  },
})`
  font-size: 1vh;
  width: 25%;
  text-align: center;
  font-weight: 300;
  margin-bottom: 1%;

  ${mediaLarge(css`
    font-size: 1.5vh;
  `)}
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #0f1c342b;
  border-radius: 12px;
  width: 20%;
  height: 80%;
  rotate: 30deg;
`;

export const SecondOverlay = styled(Overlay)`
  top: 30%;
  right: 5%;
  left: unset;
  width: 20%;
  height: 100%;
  rotate: 80deg;
  z-index: 0;
`;
