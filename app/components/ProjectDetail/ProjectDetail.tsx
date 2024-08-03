import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ButtonCTA,
  CloseProject,
  CodeBreakdownContainer,
  CodeBreakdownContainerText,
  CodeBreakdownTitle,
  Container,
  DescriptionText,
  Divider,
  DividerBottom,
  FlexContainer,
  GoLiveCTA,
  InnerContainer,
  LinkContainer,
  LinksContainer,
  Media,
  OverlayProjectDetail,
  ProjectDetailText,
  ProjectSpec,
  ProjectSpecContainer,
  ProjectSpecTitle,
  ProjectSpecsContainer,
  SecondaryOverlayProjectDetail,
  SectionContainer,
  ThankYouText,
  Title,
  TitleContainer,
} from "./ProjectDetail.styles";
import { ReactLenis, useLenis } from "lenis/react";
import { Project } from "@/utils/types/app.types";
import SlideShow from "../SlideShow/SlideShow";
import useStore from "@/app/store/useStore";
import CodeBlock from "../CodeBlock/CodeBlock";
import Lenis from "lenis";

interface ProjecDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail = ({ onClose, project }: ProjecDetailProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const { onHoverStartStore, onHoverEndStore, preloadedSources } = useStore();
  const {
    projectName,
    codeBreakDown,
    mainTakeAway,
    mediaPath,
    techStack,
    deployment,
  } = project;
  const combinedArray = [...techStack, ...(deployment ?? [])];
  const combinedString = combinedArray.join(", ");
  const gifUrl = preloadedSources.find(
    ({ mediaPath: path }) => path === mediaPath
  )?.url;
  const raf = useCallback(
    (time: number) => {
      lenis?.raf(time);
      requestAnimationFrame(raf);
    },
    [lenis]
  );
  useEffect(() => {
    if (!lenis) {
      setLenis(
        new Lenis({
          lerp: 0.04,
          wrapper: ref.current!,
        })
      );
    }
    requestAnimationFrame(raf);
    return () => {
      lenis?.destroy();
    };
  }, [lenis, raf]);

  return (
    <Container>
      <InnerContainer ref={ref}>
        <FlexContainer>
          <TitleContainer>
            <Title> {projectName} </Title>

            <ProjectDetailText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ad
              ratione quas culpa possimus vel omnis. Quia eos omnis accusantium
              optio, libero natus incidunt laboriosam dolores et est. Quam,
              dicta. Lorem ipsum dolor sit amet.
            </ProjectDetailText>

            <ProjectSpecsContainer>
              <ProjectSpecContainer>
                <ProjectSpecTitle>Project Type</ProjectSpecTitle>
                <ProjectSpec>Cloud</ProjectSpec>
              </ProjectSpecContainer>

              <ProjectSpecContainer>
                <ProjectSpecTitle>Tech Stack</ProjectSpecTitle>
                <ProjectSpec>{combinedString}</ProjectSpec>
              </ProjectSpecContainer>

              <ProjectSpecContainer>
                <ProjectSpecTitle> Date </ProjectSpecTitle>
                <ProjectSpec>Aug, 2024</ProjectSpec>
              </ProjectSpecContainer>

              <LinksContainer>
                <LinkContainer>Launch App</LinkContainer>
                <LinkContainer>View Source Code</LinkContainer>
              </LinksContainer>
            </ProjectSpecsContainer>
          </TitleContainer>

          <Media src={gifUrl} />

          <Divider />

          <CodeBreakdownContainer>
            <CodeBreakdownTitle> Code Breakdown </CodeBreakdownTitle>

            <CodeBreakdownContainerText
              dangerouslySetInnerHTML={{ __html: [...mainTakeAway] }}
            />

            {codeBreakDown.map(({ text, codeSnippet }) => (
              <SectionContainer key={text}>
                <DescriptionText dangerouslySetInnerHTML={{ __html: text }} />
                <CodeBlock code={codeSnippet} />
              </SectionContainer>
            ))}
          </CodeBreakdownContainer>

          <GoLiveCTA>
            <ThankYouText>Thank you!</ThankYouText>
            <DividerBottom />
            <ButtonCTA>Go Live </ButtonCTA>
          </GoLiveCTA>
        </FlexContainer>

        <CloseProject onClick={onClose}>Close Project |</CloseProject>
      </InnerContainer>
      <OverlayProjectDetail />
      <SecondaryOverlayProjectDetail />
    </Container>
  );
};

export default ProjectDetail;
