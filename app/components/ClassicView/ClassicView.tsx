import React from "react";
import { Container, ProjectPreviewContainer } from "./ClassicView.styles";
import projectData from "@/utils/projectData";

const ClassicView = () => {
  return (
    <Container>
      {projectData.map((project, i) => (
        <ProjectPreviewContainer key={i}>
          {project.projectName}{" "}
        </ProjectPreviewContainer>
      ))}
    </Container>
  );
};

export default ClassicView;
