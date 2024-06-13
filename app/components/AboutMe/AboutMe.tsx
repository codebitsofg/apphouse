import React, { useEffect, useLayoutEffect, useRef } from "react";
import * as S from "./AboutMe.styles";
import {
  detailParagraphs,
  educationConfig,
  skills,
  workHistory,
} from "./confg";
import {
  Link,
  TabItemContainer,
  TabText,
} from "../Navigation/Navigation.styles";
import LinkedinLogo from "../Icons/LinkedinLogo";
import useStore from "@/app/store/useStore";
import GitIcon from "../Icons/GitIcon";
import Education from "../Education/Education";
import Work from "../Work/Work";

interface AboutMeProps {
  onAboutMeClick: () => void;
}
const AboutMe = ({ onAboutMeClick }: AboutMeProps) => {
  const { onHoverStartStore, onHoverEndStore } = useStore();

  const props = {
    onHoverStart: onHoverStartStore,
    onHoverEnd: onHoverEndStore,
  };
  return (
    <>
      <S.Container>
        <S.NameContainer>
          Fullstack Developer realizing complex solutions
          <S.BeratImage />
        </S.NameContainer>

        {detailParagraphs.map((detail) => (
          <S.DetailedText key={detail}>{detail}</S.DetailedText>
        ))}

        <S.SocialsContainer>
          <TabItemContainer {...props} layout>
            <Link href={"https://www.linkedin.com/in/gencberat"}>
              <LinkedinLogo />
            </Link>
          </TabItemContainer>

          <Link href="https://github.com/soberbat">
            <TabItemContainer {...props}>
              <GitIcon />
            </TabItemContainer>
          </Link>
        </S.SocialsContainer>
        <S.Section>
          <S.SectionTitle>Work Background</S.SectionTitle>
          {workHistory.map((work, i) => (
            <Work key={i} {...work} />
          ))}
        </S.Section>

        <S.Section>
          <S.SectionTitle>Educational Background</S.SectionTitle>
          {educationConfig.map((props, i) => (
            <Education key={i} {...props} />
          ))}
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
