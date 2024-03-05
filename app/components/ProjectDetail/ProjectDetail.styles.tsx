import { opacityConfig } from "@/utils/animationConfig";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { TabItemContainer } from "../Navigation/Navigation.styles";
import { mediaLarge } from "@/utils/media";

export const Container = styled(motion.div).attrs({
  ...opacityConfig,
  transition: { delay: 0.4 },
})`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
  background-color: #f7f9f5;
  z-index: 0;
  font-weight: 300;
  overflow: scroll;

  ${mediaLarge(css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.1rem;
  `)}
`;

export const Panel = styled.section`
  flex: 1;
  box-sizing: border-box;
  color: gray;
  overflow: scroll;
  scrollbar-color: gainsboro transparent;
  padding: 3% 5%;
  ${mediaLarge(css`
    padding: 2% 3%;
    overflow-y: scroll;
    overflow-x: hidden;
    flex: 4.5;
    min-height: 100%;
    height: 100%;
  `)}
`;

export const SectionContainer = styled.section`
  margin-top: 3vh;
`;

export const DescriptionTitle = styled.h1`
  font-weight: 400;
  margin-bottom: 1vh;
  color: #ed1c24;
  font-size: 2rem;
  border-bottom: 1px dotted gainsboro;
  width: max-content;
  padding-bottom: 0.5vh;
`;

export const DescriptionText = styled.p`
  text-align: left;
  margin-bottom: 2%;
  font-size: 0.8rem;
  font-weight: 400;

  span {
    color: #090c9b;
    font-weight: 400;
  }
`;

export const PanelInnerContainer = styled.div`
  height: 300dvh;
`;

export const RightPanel = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 3% 5%;

  ${mediaLarge(css`
    flex: 5.5;
    padding: unset;
    height: 100%;
  `)}
`;

export const TitleContainer = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  top: 2vh;
  right: 2vw;
  gap: 0.5vw;
  background-color: #f7f9f5;
  padding: 0.3% 1%;

  ${mediaLarge(css`
    padding: unset;
  `)}
`;

export const ProjectTitle = styled.h1`
  font-size: 1rem;
  font-weight: 300;
  margin: 0;
  padding: 0;
  display: inline-block;
  color: #090c9b;
  font-weight: 300;
  margin-right: 1vw;

  ${mediaLarge(css`
    font-size: 1rem;
    margin-right: unset;
  `)}
`;

export const ProjectType = styled.h3`
  margin: 0;
  padding: 0;
  font-weight: 300;
  display: inline-block;
  margin-left: 0.5vw;
  font-size: 0.8rem;
  color: gray;
`;

export const Gallery = styled.section`
  width: 100%;
  height: 70%;
  background-color: black;
  margin-bottom: 3vh;
`;

export const MediaTitle = styled.span`
  color: gray;
  align-self: self-start;
`;

export const GoBack = styled(motion.div)`
  width: 4.5vw;
  height: 4.5vw;
  background-image: url("/back.svg");
  transform: scale(-1);
  background-repeat: no-repeat;
  background-size: 100%;

  ${mediaLarge(css`
    width: 2vw;
    height: 2vw;
  `)}
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  justify-content: flex-start;
  gap: 1vw;
  margin-top: 1vh;
`;
