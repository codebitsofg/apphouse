import { mediaLarge } from "@/utils/media";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Container = styled(motion.div).attrs({
  initial: { y: "100%" },
  animate: { y: 0 },
  transition: { type: "spring", stiffnes: 3, damping: 30 },
  exit: { y: "100%" },
})`
  width: 100vw;
  will-change: transform;
  height: 95dvh;
  background-color: #f7f9f5;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top-right-radius: 6vh;
  border-top-left-radius: 6vh;
  z-index: 4;
  overflow: hidden;
  overflow-y: scroll;

  color: #0f0e0e;
  text-align: left;
`;

export const NameContainer = styled.h1`
  margin: 0;
  color: #ed1c24;
  font-size: 7rem;
  font-weight: 400;
  text-transform: uppercase;
  width: max-content;
  margin: 0 auto;
  text-align: center;
`;

export const InfoContainer = styled.div`
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1vh;
  gap: 1rem;
`;

export const InfoText = styled.h3`
  font-weight: 400;
  font-size: 0.8rem;
  color: #090c9b;
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
  font-size: 3rem;
  padding-bottom: 0.5%;
  border-bottom: 1px dotted #0f0e0e;
  margin-bottom: 1%;
  color: #ed1c24;
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
  color: #090c9b;
`;

export const ExperienceDetail = styled.div`
  margin-top: 2%;
  font-weight: 300;
`;

export const DetailPoint = styled.span`
  display: block;
  margin-bottom: 0.5%;
  font-size: 0.9rem;
`;

export const Bullet = styled.span`
  color: #090c9b;
`;

export const Skill = styled.div`
  background-color: #0f0e0e;
  max-width: fit-content;
  padding: 0.5%;
  color: #f7f9f5;
  margin-bottom: 1%;
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
  color: #ed1c24;
`;
