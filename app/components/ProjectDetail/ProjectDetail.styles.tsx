import { opacityConfig } from "@/utils/animationConfig";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { TabItemContainer } from "../Navigation/Navigation.styles";
import { mediaLarge } from "@/utils/media";

import { Overlay, SecondOverlay } from "../LoadingPage/LoadingPage.styles";

export const Container = styled(motion.div).attrs({
  ...opacityConfig,
  transition: { delay: 1 },
  exit: { opacity: 0, transition: { delay: 1 } },
})`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
  background-color: #1c1a1c;
  z-index: 0;
  font-weight: 300;
  overflow: hidden;
  scroll-behavior: smooth;

  ${mediaLarge(css``)};
`;

export const SectionContainer = styled.section`
  margin-top: 3vh;
  margin-bottom: 8vh;
`;

export const DescriptionTitle = styled.h1`
  font-weight: 400;
  margin-bottom: 1vh;
  color: #001a23;
  font-size: 2rem;
  border-bottom: 1px dotted gainsboro;
  width: max-content;
  padding-bottom: 0.5vh;

  ${mediaLarge(css`
    font-size: 3.4rem;
  `)}
`;

export const DescriptionText = styled.p`
  text-align: left;
  color: #8e8d8e;
  margin: 1% 0;
  font-size: 0.8rem;
  font-weight: 400;
  font-size: 0.7rem;
`;

export const PanelInnerContainer = styled.div`
  height: 300dvh;
`;

export const RightPanel = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3% 5%;

  ${mediaLarge(css`
    flex: 5.5;
    padding: 4% 0;
    height: 100%;
  `)}
`;

export const TechStackWrapper = styled.div`
  h3 {
    margin: 0;
    margin-bottom: 2%;
    padding: 0;
    font-size: 1rem;
    color: #04080f;
  }

  span {
    font-size: 0.8rem;
    font-weight: 400;
  }
`;
// export const TitleContainer = styled.div`
//   display: flex;
//   position: fixed;
//   align-items: center;
//   justify-content: center;
//   top: 2vh;
//   right: 2vw;
//   gap: 0.5vw;
//   background-color: #f7f9f5;
//   padding: 0.3% 1%;

//   ${mediaLarge(css`
//     padding: unset;
//   `)}
// `;

export const SecondaryTitle = styled.h1`
  font-size: 1rem;
  font-weight: 300;
  margin: 0;
  padding: 0;
  display: inline-block;
  color: #001a23;
  font-weight: 300;
  margin-right: 1vw;

  ${mediaLarge(css`
    font-size: 2rem;
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
  cursor: pointer;
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

export const OverlayProjectDetail = styled(Overlay)`
  background-color: #1f1d1f;
`;
export const SecondaryOverlayProjectDetail = styled(SecondOverlay)`
  background-color: #1f1d1f;
`;

export const InnerContainer = styled(motion.div).attrs({
  ...opacityConfig,
  transition: { delay: 1.6, duration: 1 },
})`
  opacity: 0;
  overflow-y: scroll;
  height: 100vh;
  position: relative;
  z-index: 1;
  scroll-behavior: smooth;
  padding-bottom: 10%;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #1c1a1c;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #4a4a4a;
    border-radius: 4px;
    border: 2px solid #1c1a1c;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #6a6a6a;
  }

  & {
    scrollbar-width: thin;
    scrollbar-color: #4a4a4a #1c1a1c;
  }
`;

/////NEW VERSİON

export const Divider = styled.hr`
  border: 0.4px solid #d4d4d434;
  align-self: stretch;
  margin: 7vh 0;
`;

export const FlexContainer = styled.div`
  width: 65%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleContainer = styled.div`
  gap: 6vh;
  user-select: none;
  margin-bottom: 5vh;
  height: 100dvh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 1;
  position: relative;
  flex-direction: column;
  font-weight: 100;
  color: #d4d4d4;
`;

export const Title = styled.h1`
  font-weight: 200;
  font-size: 3.5rem;
  color: white;
`;

export const ProjectDetailText = styled(motion.p)`
  font-size: 2rem;
  background-color: #424242;
  filter: blur(60px);
  line-height: 3rem;
  border-radius: 100%;
  color: #d4d4d42a;
  font-weight: 100;
  margin-bottom: 5%;
`;

export const ProjectSpecsContainer = styled.div`
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ProjectSpecContainer = styled.div`
  flex: 0.4;
`;

export const ProjectSpecTitle = styled.h4`
  text-transform: uppercase;
  font-weight: 400;
  margin-bottom: 1.2vh;
  font-size: 0.7rem;
  color: white;
`;
export const ProjectSpec = styled.span`
  font-size: 0.7rem;
  font-weight: 300;
  line-height: 1.2rem;
  display: inline-block;
  width: 70%;
  color: #8e8d8e;
`;

export const LinksContainer = styled.div`
  flex: 0.5;
`;

export const LinkContainer = styled.div`
  width: 100%;
  cursor: pointer;
  padding: 5.1%;
  border: 0.8px solid #8e8d8e;
  color: white;
  font-weight: 300;
  margin-bottom: 3%;
  font-size: 0.9rem;
  transition: all ease-in-out 0.5s;

  &:hover {
    border-color: white;
  }
`;

export const Media = styled.img`
  width: 100%;
  margin-bottom: 3vh;
  border: 1px solid white;
  display: inline-block;
`;

export const CodeBreakdownContainer = styled.div`
  padding: 5% 0;
  p {
    filter: blur(0px);
  }
`;

export const CodeBreakdownContainerText = styled(ProjectDetailText)`
  font-size: 1rem;
  line-height: 2rem;
  background-color: transparent;
  color: #d4d4d4;
`;
export const CodeBreakdownTitle = styled(Title)`
  margin-bottom: 2%;
  font-size: 3rem;
`;

export const GoLiveCTA = styled.div`
  display: flex;
  align-self: stretch;
  align-items: center;
  justify-content: center;
  color: #d4d4d4;
`;

export const DividerBottom = styled.span`
  flex: 1;
  display: inline-block;
  border: 0.1px solid #8e8d8e;
  margin-left: 6%;
`;

export const ButtonCTA = styled(LinkContainer)`
  padding: 1.4%;
  margin: 0;
  width: unset;
  flex: 0.4;
`;

export const ThankYouText = styled.span`
  color: #8e8d8e;
  font-weight: 300;
`;

export const CloseProject = styled.h4`
  position: fixed;
  top: 3%;
  user-select: none;
  right: 5%;
  font-weight: 300;
  color: #8e8d8e;
  cursor: pointer;
`;
