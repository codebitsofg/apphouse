import styled, { css, keyframes } from "styled-components";
import { motion } from "framer-motion";
import { opacityConfig } from "@/utils/animationConfig";
import { mediaLarge } from "@/utils/media";

export const Container = styled(motion.div).attrs({
  animate: {
    opacity: 1,
    transition: { duration: 0.6, ease: "backInOut", delay: 0 },
  },
  initial: { opacity: 0 },
  exit: {
    opacity: 0,
    transition: {
      delay: 1.2,
    },
  },
})`
  width: 100vw;
  height: 100vh;
  display: flex;
  top: 0;
  left: 0;
  color: #141414;
  position: fixed;
  background-color: #faf6ef;
`;

export const InnerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  padding-top: 5%;
  display: flex;
`;

export const UpperContainer = styled(motion.div)`
  align-self: stretch;
  padding: 0 1vw;
  height: 25vh;
`;

export const LinkTo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: all;
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  align-items: center;
  justify-content: flex-end;
  background-color: #f1ede7;
  height: 5vh;
  display: flex;
  padding-right: 1vw;

  h4 {
    margin: 0;
  }
  div {
    align-items: center;
    h4 {
      margin: 0;
    }

    span {
      margin: 0;
    }
  }
`;

export const AnimationContainer = styled(motion.div).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
})`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1vw;
`;
export const Button = styled.div`
  padding: 0.5vh;
  font-size: 0.8rem;
  border: 1px solid #141414;
`;
export const StackContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 9%;
  height: 20vh;
  font-weight: 500;
  align-items: flex-start;
`;
export const StackTitle = styled.h4`
  margin-bottom: 2vh;
  font-size: 0.7rem;
  font-weight: 500;
  text-transform: uppercase;
`;

export const StackItem = styled.span`
  background-color: #f1ede7;
  padding: 0.3vh 0.8vh;
  margin-bottom: 0.7vh;
  font-size: 0.7rem;
  display: inline-block;
  border-radius: 0.4px;
`;

export const DescriptionContainer = styled.div`
  width: 60%;
`;

export const Descriptions = styled.div`
  margin-top: 1vh;
  display: flex;
  flex-direction: column;
`;

export const Description = styled(StackItem)`
  background-color: transparent;
`;

export const Title = styled.span`
  padding: 0 2%;
  font-weight: 300;
  display: block;
  margin-bottom: 2vh;
  font-size: 2.5rem;
  width: max-content;
  background-color: #f1ede7;
  padding: 0.3vh 0.8vh;
  border-radius: 2px;
`;

export const OverflowingContainer = styled(motion.div)`
  width: 100vw;
  transform-origin: top;
  overflow: hidden;
`;

export const ItemContainer = styled(motion.div)`
  width: 200vw;
  align-items: flex-start;
  display: flex;
  padding: 5% 5%;
  gap: 0.2%;
`;

export const Item = styled(motion.div)`
  background-color: #faf6ef;
  cursor: pointer;
  flex: 1;
  transform-origin: top left;
  height: 200px;
  align-items: center;
  justify-content: center;
  position: relative;
  display: flex;
  background-color: #000000;
`;

export const BeratGencText = styled.h3`
  position: absolute;
  bottom: 7vh;
  font-weight: 300;
  left: 1vw;
  font-size: 0.7rem;
  width: 10%;
  padding-bottom: 1vh;
  text-align: left;
`;

export const ItemInnerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

export const ProjectImage = styled.img`
  width: 50%;
  object-fit: contain;
  height: 50%;
  pointer-events: all;
`;

export const Overlay = styled(motion.div).attrs({
  initial: { opacity: 1 },
  animate: { opacity: 0 },
  transition: { duration: 0.6, delay: 0.5, ease: "anticipate" },
})`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #faf6ef;
  z-index: 1;
`;

///////
export const ProjectPreviewContainer = styled.div`
  margin-bottom: 10%;
  border-radius: 4px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: center;
  flex-direction: column;
  color: #04080f;
  position: relative;
  flex: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;

export const TextContainer = styled.div`
  width: 80%;
  margin: 0 auto;

  ${mediaLarge(css`
    width: 50%;
  `)}
`;
export const ProjectTitleContainer = styled.div`
  margin-top: 3%;
  margin-bottom: 1%;
`;
export const ProjectTitle = styled.h1`
  font-weight: 400;
`;

export const ProjectDesc = styled.p`
  margin-bottom: 0.7%;
  font-size: 0.8rem;
  text-align: left;
`;
