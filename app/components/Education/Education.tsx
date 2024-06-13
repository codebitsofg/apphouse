import React from "react";
import { Container, Point, HighLight } from "./Education.styles";

interface EducationProps {
  school: string;
  degree: string;
  year: string;
  type: string;
}
const Education = ({ school, year, degree, type }: EducationProps) => {
  return (
    <Container>
      <Point>{school}</Point>
      <Point>
        {degree} - <HighLight>{type}</HighLight>
      </Point>
      <Point>{year}</Point>
    </Container>
  );
};

export default Education;
