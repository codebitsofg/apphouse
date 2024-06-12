import { opacityConfig } from "@/utils/animationConfig";
import { mediaLarge } from "@/utils/media";
import { motion } from "framer-motion";
import styled from "styled-components";
import css from "styled-jsx/css";
import { Overlay } from "../LoadingPage/LoadingPage.styles";

export const Container = styled(motion.div).attrs({
  ...opacityConfig,
  transition: { delay: 2, duration: 0.5 },
})`
  position: fixed;
  background-color: #fdfffcd0;
  border: 1px solid #04080f20;
  padding: 0.5% 1%;
  border-radius: 2px;
  box-shadow: 0 0 10px #04080f20;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  transform: translate(0, -50%);
  top: 50%;
  right: 0.3%;
  z-index: 5;
  height: 50%;
  width: 4%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${mediaLarge(css`
    gap: 1vw;
  `)}
`;

export const AboutMe = styled.div`
  background-image: url("/me.svg");
  width: 2vw;
  height: 2vw;
  background-repeat: no-repeat;
  object-fit: cover;
  background-size: 100%;
`;

interface TabItemContainerProps {
  isDark?: boolean;
}



export const TabItemContainer = styled(motion.div)<TabItemContainerProps>`
  /* background-color: ${({ isDark }) => (isDark ? "#04080f" : "#f7f9f5")}; */
  padding: 0.9vw;
  border-radius: 100%;
  width: 8vw;
  cursor: pointer;
  display: flex;
  align-items: center;

  justify-content: center;
  height: 8vw;
  font-size: 0.7rem;

  position: relative;

  svg {
    transition: all ease-in 500ms;
    transition-delay: 2;
    width: 60%;
    height: 60%;
  }

  ${mediaLarge(css`
    width: 3vw;
    height: 3vw;

    svg {
      width: 100%;
      height: 100%;
    }
  `)}
`;

export const TabText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3vh;
  border: 1px solid black;
  padding: 0.3vh;
  svg {
    width: 70%;
    height: 70%;
  }
`;

export const Link = styled.a.attrs({
  target: "_blank",
})`
  display: flex;
`;

export const LinkContainer = styled(motion.div).attrs({
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delay: 1.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
  transition: { duration: 0.5 },
})`
  display: flex;
  flex-direction: column;
  gap: 3vw;

  ${mediaLarge(css`
    gap: 1vw;
  `)}
`;

export const TabName = styled.span`
  position: absolute;
  top: 105%;
  text-align: center;
  left: 50%;
  display: inline-block;
  font-size: 0.6rem;
  transform: translateX(-50%);
  text-transform: uppercase;
`;
