import { opacityConfig } from "@/utils/animationConfig";
import { mediaLarge } from "@/utils/media";
import { motion } from "framer-motion";
import styled from "styled-components";
import css from "styled-jsx/css";
import { Overlay } from "../LoadingPage/LoadingPage.styles";

export const Container = styled(motion.div).attrs({
  ...opacityConfig,
})`
  position: fixed;
  top: 3%;
  right: 1.5%;
  z-index: 100;

  ${mediaLarge(css`
    gap: 1vw;
  `)}
`;

export const HamburgerButton = styled.div<{ isDark: boolean }>`
  cursor: pointer;

  ${({ isDark }) =>
    isDark &&
    `   
  div {
    background-color: black; 
  }
 
  `}
`;

export const Bar = styled.div<{ isOpen: boolean }>`
  width: 1.5vw;
  margin-bottom: 0.3vw;
  height: 0.11vw;
  background-color: white;
  transition: all 0.3s ease-in-out;
  transition-delay: 1s;
  ${({ isOpen }) =>
    isOpen &&
    `
    &:nth-child(1) {
      transform: rotate(45deg) translateY(10px);
    }
    &:nth-child(2) {
      opacity: 0;
    }
    &:nth-child(3) {
      transform: rotate(-45deg) translateY(-10px);
    }
    background-color: black;
  `}
`;

export const Wrapper = styled(motion.div).attrs({
  animate: {
    x: 0,
    transition: {
      ease: "anticipate",
      duration: 1,
    },
  },
  initial: {
    x: "100%",
  },
  exit: {
    x: "100%",
    transition: {
      ease: "easeInOut",
      duration: 0.3,
    },
  },
})`
  background-color: #bac4b8;
  width: 35vw;
  height: 100vh;
  top: 0;
  right: 0;
  position: fixed;
  z-index: 99;
  color: #212121;
`;

export const NavItem = styled.div`
  position: relative;
  cursor: pointer;
`;

export const NavName = styled.h1`
  text-align: left;
  font-size: 4rem;
  font-weight: 500;
`;

export const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const Details = styled.div`
  position: fixed;
  bottom: 4%;
  display: flex;
  width: 100%;
`;

export const MailContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.6rem;
  flex: 0.5;
  align-items: center;
  justify-content: center;
`;

export const NavNumber = styled.span``;

export const MiniItem = styled.span``;
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

export const LinkedinWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
`;

export const TabText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3vh;
  width: 3vw;
  padding: 0.3vh;

  svg {
    width: 1.3vh;
    height: 1.3vh;
  }

  ${mediaLarge(css`
    svg {
      width: 40% important!;
      height: 40% important!;
    }
  `)}
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
