import React, { useEffect, useRef, useState } from "react";
import {
  AnimationContainer,
  BeratGencText,
  Button,
  ButtonContainer,
  Container,
  Description,
  DescriptionContainer,
  Descriptions,
  Footer,
  InnerContainer,
  Item,
  ItemContainer,
  ItemInnerContainer,
  LinkTo,
  OverflowingContainer,
  Overlay,
  ProjectDesc,
  ProjectImage,
  ProjectPreviewContainer,
  ProjectTitle,
  ProjectTitleContainer,
  StackContainer,
  StackItem,
  StackTitle,
  TextContainer,
  Title,
  UpperContainer,
} from "./ClassicView.styles";
import projectData from "@/utils/projectData";
import useStore from "@/app/store/useStore";

import GlobeIcon from "../Icons/GlobeIcon";
import GitIcon from "../Icons/GitIcon";
import BeratGencLogo from "../Icons/BeratGencLogo";
import { Link } from "../Navigation/Navigation.styles";
import styled from "styled-components";
import {
  AnimatePresence,
  motion,
  useAnimationControls,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Project } from "@/utils/types/app.types";

const ClassicView = () => {
  const { onHoverStartStore, onHoverEndStore, preloadedSources } = useStore();
  const [heights, setHeights] = useState<{ [key: number]: string }>({});
  useEffect(() => {
    const newHeights: { [key: number]: string } = {};
    projectData.forEach((_, i) => {
      newHeights[i] = Math.random() > 0.5 ? "150px" : "220px";
    });
    setHeights(newHeights);
  }, []);
  const [hoveredProject, sethoveredProject] = useState<Project | null>();
  const onHovered = (project: Project) => sethoveredProject(project);
  const mouseX = useMotionValue(0);
  const x = useTransform(
    mouseX,
    [0, window.innerWidth],
    [0, -window.innerWidth]
  );
  const xSpring = useSpring(x, { damping: 30, stiffness: 40 });

  const handleMouseMove = (event: any) => {
    mouseX.set(event.clientX);
  };

  return (
    <Container key={"ddddskfkfk"}>
      <InnerContainer>
        <OverflowingContainer>
          <ItemContainer
            transition={{ duration: 1, ease: "anticipate" }}
            style={{ x: xSpring }}
            onMouseMove={handleMouseMove}
            onHoverEnd={() => sethoveredProject(null)}
          >
            {projectData.map((project, i) => {
              const { mediaPath, liveLink } = project;
              const gifUrl = preloadedSources.find(
                ({ mediaPath: path }) => path === mediaPath
              )?.url;
              return (
                <Item
                  key={i}
                  initial={{ flex: 1 }}
                  whileHover={{ flex: 2 }}
                  onHoverStart={() => {
                    console.log(mediaPath);
                    sethoveredProject(project);
                  }}
                  transition={{ duration: 1, ease: "anticipate" }}
                  style={{ height: heights[i] }}
                >
                  <ItemInnerContainer>
                    <Overlay />
                    <LinkTo href={liveLink} target="_blank">
                      <ProjectImage src={gifUrl} />
                    </LinkTo>
                  </ItemInnerContainer>
                </Item>
              );
            })}
          </ItemContainer>
        </OverflowingContainer>

        <UpperContainer key={"presence"}>
          <AnimatePresence mode="wait">
            {hoveredProject && (
              <AnimationContainer key={hoveredProject.repoLink}>
                <DescriptionContainer>
                  <Title>{hoveredProject.projectName}</Title>

                  <Descriptions>
                    {hoveredProject.mainTakeAway.map((tk, i) => (
                      <Description
                        key={i}
                        dangerouslySetInnerHTML={{ __html: tk }}
                      />
                    ))}
                  </Descriptions>
                </DescriptionContainer>
                <StackContainer>
                  <StackTitle>Tech Stack</StackTitle>
                  {hoveredProject.deployment?.map((s, i) => (
                    <StackItem key={i}> {s} </StackItem>
                  ))}
                  {hoveredProject.techStack?.map((s, i) => (
                    <StackItem key={i}> {s} </StackItem>
                  ))}
                </StackContainer>
              </AnimationContainer>
            )}
          </AnimatePresence>
        </UpperContainer>

        <Footer>
          {hoveredProject ? (
            <AnimationContainer key={hoveredProject.liveLink}>
              <StackTitle>{hoveredProject?.projectName} |</StackTitle>
              <Description>{hoveredProject?.shortDesc}.</Description>
            </AnimationContainer>
          ) : (
            <StackTitle>Hover over and click to launch the project</StackTitle>
          )}
        </Footer>

        <BeratGencText>Berat Genç 2024 | Available for hire </BeratGencText>
      </InnerContainer>
    </Container>
  );
};

export default ClassicView;
