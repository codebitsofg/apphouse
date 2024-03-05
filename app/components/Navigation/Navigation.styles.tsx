import { mediaLarge } from "@/utils/media";
import { motion } from "framer-motion";
import styled from "styled-components";
import css from "styled-jsx/css";

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 9;
  z-index: 4;
  padding: 2vw;
  display: flex;
  gap: 3vw;

  ${mediaLarge(css`
    gap: 0.5vw;
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
  isDark: boolean;
}

export const TabItemContainer = styled(motion.div)<TabItemContainerProps>`
  background-color: ${({ isDark }) => (isDark ? "gainsboro" : "#f7f9f5")};
  padding: 0.9vw;
  border-radius: 100%;
  width: 8vw;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8vw;
  transition: all ease-in 500ms;
  transition-delay: 2;

  svg {
    transition: all ease-in 500ms;
    transition-delay: 2;
    width: 60%;
    height: 60%;
  }

  ${mediaLarge(css`
    width: 2.7vw;
    height: 2.7vw;

    svg {
      width: 100%;
      height: 100%;
    }
  `)}
`;

export const Link = styled.a.attrs({
  target: "_blank",
})``;

export const LinkContainer = styled(motion.div).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5, delay: 0.5 },
})`
  display: flex;
  gap: 3vw;

  ${mediaLarge(css`
    gap: 0.5vw;
  `)}
`;
