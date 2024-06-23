import { mediaLarge } from "@/utils/media";
import { motion } from "framer-motion";
import styled, { css, keyframes } from "styled-components";

export const Container = styled(motion.div).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0 },
})`
  width: 95vw;
  will-change: transform;
  height: 97dvh;
  background-color: #fdfffc;
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 8px;
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
  src: "/berat.jpeg",
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

export const Overlay = styled(motion.div).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0 },
})`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #ffffffe3;
  z-index: 1;
  opacity: 1;
  top: 0;
  left: 0;
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
  border-bottom: 1px dotted #0f0e0e;
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
  font-size: 0.8rem;
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
  border-bottom: 1px dotted #0f0e0e;
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

export const RowText = styled.span`
  color: #8fbcf6;
`;

export const ExperienceDetail = styled.div`
  margin-top: 2%;
  font-weight: 300;
`;

export const DetailPoint = styled.span`
  display: block;
  margin-bottom: 0.5%;
  font-size: 0.5rem;

  ${mediaLarge(css`
    font-size: 0.9rem;
  `)}
`;

export const Bullet = styled.span`
  color: #090c9b;
`;

export const Skill = styled.div`
  background-color: #04080f;
  max-width: fit-content;
  padding: 0.5%;
  color: #f7f9f5;
  margin-bottom: 1%;
  border-radius: 3px;
  font-size: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mediaLarge(css`
    padding: 0.5%;
    font-size: 0.9rem;
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
  border-bottom: 1px dotted #0f0e0e;
`;

export const SecondaryTitle = styled.h5`
  width: max-content;
  color: #0f0e0e;
  font-weight: 400;
  font-size: 1rem;
  padding-bottom: 0.5%;
  border-bottom: 1px dotted #0f0e0e;
  margin-bottom: 1%;
  color: #8fbcf6;
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
