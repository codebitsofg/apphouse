import React from "react";
import {
  Bullet,
  DetailPoint,
  ExperienceDetail,
  Row,
  RowText,
  RowTitle,
  WorkContainer,
} from "../AboutMe/AboutMe.styles";

interface IWork {
  details: string[];
  title: string;
  companyName: string;
}
const Work = ({ details, companyName, title }: IWork) => {
  return (
    <WorkContainer>
      <Row>
        <RowTitle>Company:</RowTitle>
        <RowText>{companyName}</RowText>
      </Row>
      <Row>
        <RowTitle>Title:</RowTitle>
        <RowText>{title}</RowText>
      </Row>
      <ExperienceDetail>
        {details.map((point) => (
          <DetailPoint key={point}>
            <Bullet> &#8226;</Bullet> {point}
          </DetailPoint>
        ))}
      </ExperienceDetail>
    </WorkContainer>
  );
};

export default Work;
