import { mediaLarge } from "@/utils/media";
import { motion } from "framer-motion";
import styled, { css, keyframes } from "styled-components";
import { CloseProject } from "../ProjectDetail/ProjectDetail.styles";

export const Container = styled(motion.div).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3, delay: 0.5 } },
  exit: { opacity: 0 },
})`
  width: 95vw;
  will-change: transform;
  height: 98dvh;
  background-color: #faf6ef;
  border-radius: 4px;
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 2;
  box-shadow: 0 0 10px #04080f20;
  border: 1px solid #04080f20;
  overflow: hidden;
  overflow-y: scroll;
  color: #0f0e0e;
  text-align: left;
  padding-top: 10%;
  z-index: 100;

  ${mediaLarge(css`
    padding-top: 0;
  `)};
`;

export const Overlay = styled(motion.div).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 0.9, transition: { duration: 0.3, delay: 0.5 } },
  exit: { opacity: 0 },
})`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: 1;
  opacity: 0.7;
  top: 0;
  left: 0;
`;

export const InnerContainer = styled.div`
  width: 100%;
  overflow-y: scroll;
  height: 100vh;
  position: relative;
  scroll-behavior: smooth;
`;

export const CloseTabText = styled(CloseProject)`
  font-weight: 400;
  top: 1.2vh;
  border-radius: 2px;
  background-color: #f1ede7;
  padding: 0.5%;
  right: 1.2vw;
  color: #141414;
`;
const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

export const Skeleton = styled.div`
  background: linear-gradient(
    to right,
    #f0f0f0b7 25%,
    #e0e0e0bf 50%,
    #f0f0f0 75%
  );
  background-size: 1000px 100%;
  animation: ${shimmer} 2s infinite linear;
  width: 10vw;
  height: 10vw;
  border-radius: 3px;
  border: 1px dotted #0f0e0e;
  margin-left: 2%;
  margin-top: 2%;
  box-shadow: 0 0 10px #04080f20;
  display: inline-block;
`;

export const BeratImage = styled.img.attrs<{ isLoaded: boolean }>({
  src: "/beratsimg.jpeg",
})`
  width: 10vw;
  height: 10vw;
  object-fit: cover;
  border-radius: 3px;
  border: 1px dotted #0f0e0e;
  margin-left: 2%;
  margin-top: 2%;
  box-shadow: 0 0 10px #04080f20;
  display: ${({ isLoaded }) => (isLoaded ? "inline" : "none")};
`;

export const NameContainer = styled.h1`
  margin: 0;
  color: #04080f;
  font-size: 3.5rem;
  font-weight: 800;
  text-transform: uppercase;
  padding: 6% 0;
  padding-bottom: 1%;
  width: 60%;
  margin: 0 auto;
  margin-bottom: 2%;
  text-align: left;
  border-bottom: 0.3px solid #0f0e0e41;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1vh;
  gap: 1rem;
`;

export const InfoText = styled.h3`
  font-weight: 400;
  font-size: 0.8rem;
  color: #8fbcf6;
`;

export const DetailedText = styled.p`
  max-width: 80%;
  margin: 0 auto;
  font-weight: 300;
  margin-bottom: 0.8%;
  font-size: 0.75rem;
  text-align: center;
  ${mediaLarge(css`
    max-width: 60%;
  `)}
`;

export const Section = styled.section`
  padding: 5%;
  ${mediaLarge(css`
    padding: 3%;
  `)}
`;

export const SectionTitle = styled.h4`
  width: max-content;
  color: #0f0e0e;
  font-weight: 400;
  font-size: 2.4rem;
  padding-bottom: 0.5%;
  border-bottom: 0.3px solid #0f0e0e41;
  margin-bottom: 1%;
  color: #04080f;

  ${mediaLarge(css`
    font-size: 2.8rem;
  `)}
`;

export const Row = styled.div`
  margin-bottom: 0.5%;
`;

export const RowTitle = styled.span`
  font-weight: 300;
  margin-right: 0.5vw;
  font-size: 0.6rem;
`;

export const RowText = styled.span``;

export const ExperienceDetail = styled.div`
  margin-top: 2%;
  font-weight: 300;
`;

export const DetailPoint = styled.span`
  display: block;
  margin-bottom: 0.5%;
  font-size: 0.5rem;

  ${mediaLarge(css`
    font-size: 0.7rem;
  `)}
`;

export const Bullet = styled.span`
  color: #090c9b;
`;

export const Skill = styled.div`
  background-color: #f1ede7;
  max-width: fit-content;
  padding: 0.5%;
  margin-bottom: 1%;
  border-radius: 3px;
  font-size: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mediaLarge(css`
    padding: 0.3%;
    font-size: 0.7rem;
  `)}
`;

export const ExperienceWrapper = styled.div`
  margin-top: 5%;
`;

export const SkillsWrapper = styled.div`
  display: flex;
  gap: 2%;
  flex-wrap: wrap;
  margin-top: 1rem;
  border-bottom: 0.3px solid #0f0e0e41;
`;

export const SecondaryTitle = styled.h5`
  width: max-content;
  color: #0f0e0e;
  font-weight: 400;
  font-size: 0.8rem;
  padding-bottom: 0.5%;
  border-bottom: 0.3px solid #0f0e0e41;
  margin-bottom: 1%;
`;

export const SocialsContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2%;
`;

export const WorkContainer = styled.div`
  margin-bottom: 5%;
`;
