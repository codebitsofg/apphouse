import React, { useEffect, useLayoutEffect, useRef } from "react";
import * as S from "./AboutMe.styles";
import { detailParagraphs, detailPoints, skills } from "./confg";

interface AboutMeProps {
  onAboutMeClick: () => void;
}
const AboutMe = ({ onAboutMeClick }: AboutMeProps) => {
  return (
    <>
      <S.Container>
        <S.NameContainer>Who&#8226;Am&#8226;I?</S.NameContainer>
        <S.InfoContainer>
          <S.InfoText>Berat Genç</S.InfoText>
          &#8226;
          <S.InfoText>Łódź / Poland</S.InfoText>
          &#8226;
          <S.InfoText>beratgenc.dev@gmail.com</S.InfoText>
        </S.InfoContainer>

        {detailParagraphs.map((detail) => (
          <S.DetailedText key={detail}>{detail}</S.DetailedText>
        ))}
        <S.Section>
          <S.SectionTitle>Work</S.SectionTitle>
          <S.Row>
            <S.RowTitle>Company:</S.RowTitle>
            <S.RowText>Le Polish Bureau</S.RowText>
          </S.Row>
          <S.Row>
            <S.RowTitle>Title:</S.RowTitle>
            <S.RowText>Frontend Developer</S.RowText>
          </S.Row>
          <S.ExperienceDetail>
            {detailPoints.map((point) => (
              <S.DetailPoint key={point}>
                <S.Bullet> &#8226;</S.Bullet> {point}
              </S.DetailPoint>
            ))}
          </S.ExperienceDetail>
        </S.Section>

        <S.Section>
          <S.SectionTitle>Key Skills</S.SectionTitle>
          {Object.entries(skills).map(([key, value]) => {
            return (
              <S.SkillsWrapper key={key}>
                <S.SecondaryTitle>{key} </S.SecondaryTitle>{" "}
                {value.map((skill) => (
                  <S.Skill key={skill}> {skill} </S.Skill>
                ))}
              </S.SkillsWrapper>
            );
          })}
        </S.Section>
      </S.Container>

      <S.Overlay />
    </>
  );
};

export default AboutMe;
