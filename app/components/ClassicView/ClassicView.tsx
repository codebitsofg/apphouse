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
import { Link } from "../Navigation/Navigation.styles";

const ClassicView = () => {
  const { onHoverStartStore, onHoverEndStore, preloadedSources } = useStore();

  return (
    <Container key={"ddddskfkfk"}>
      {projectData.map(
        (
          {
            mediaPath,
            projectName,
            mainTakeAway,
            techStack,
            deployment,
            liveLink,
            repoLink,
          },
          i
        ) => {
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

                <TechStackContainer>
                  <TechStackTitle>[ Tech Stack ]</TechStackTitle>
                  {techStack?.map((item) => (
                    <StackItem key={item}>
                      {"•"} {item}
                    </StackItem>
                  ))}
                  {deployment?.map((item) => (
                    <StackItem key={item}>
                      {"•"} {item}
                    </StackItem>
                  ))}
                </TechStackContainer>

                <IconsContainer>
                  <Link href={liveLink}>
                    <GlobeIcon />
                  </Link>
                  <Link href={repoLink}>
                    <GitIcon />
                  </Link>
                </IconsContainer>
              </TextContainer>
            </ProjectPreviewContainer>
          );
        }
      )}

      <PlusIconContainer>
        <PlusIcon />
      </PlusIconContainer>
    </Container>
  );
};

export default ClassicView;
