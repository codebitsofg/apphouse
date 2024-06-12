import React from "react";
import {
  Container,
  IconsContainer,
  PlusIcon,
  PlusIconContainer,
  ProjectDesc,
  ProjectImage,
  ProjectPreviewContainer,
  ProjectTitle,
  ProjectTitleContainer,
  StackItem,
  TechStackContainer,
  TechStackTitle,
  TextContainer,
} from "./ClassicView.styles";
import projectData from "@/utils/projectData";
import useStore from "@/app/store/useStore";

import GlobeIcon from "../Icons/GlobeIcon";
import GitIcon from "../Icons/GitIcon";
import BeratGencLogo from "../Icons/BeratGencLogo";

const ClassicView = () => {
  const { onHoverStartStore, onHoverEndStore, preloadedSources } = useStore();

  return (
    <Container key={"ddddskfkfk"}>
      {projectData.map(({ mediaPath, projectName, mainTakeAway }, i) => {
        const gifUrl = preloadedSources.find(
          ({ mediaPath: path }) => path === mediaPath
        )?.url;
        return (
          <ProjectPreviewContainer key={`${i}-comp`}>
            <ProjectImage src={gifUrl} />

            <TextContainer>
              <ProjectTitleContainer>
                <ProjectTitle>{projectName} </ProjectTitle>
              </ProjectTitleContainer>

              {mainTakeAway.map((text) => (
                <ProjectDesc
                  key={text}
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              ))}

              <IconsContainer>
                <GlobeIcon />
                <GitIcon />
              </IconsContainer>
            </TextContainer>

            <TechStackContainer>
              <TechStackTitle>[ Tech Stack ]</TechStackTitle>
              <StackItem> {">"} Three.js</StackItem>
              <StackItem> {">"} Zustand.js</StackItem>
              <StackItem> {">"} Github Actions</StackItem>
              <StackItem></StackItem>
              <StackItem></StackItem>
            </TechStackContainer>
          </ProjectPreviewContainer>
        );
      })}

      <PlusIconContainer>
        <PlusIcon />
      </PlusIconContainer>
    </Container>
  );
};

export default ClassicView;
