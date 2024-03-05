import * as S from "./ProjectDetail.styles";
import { Project } from "@/utils/app.types";
import CodeBlock from "../CodeBlock/CodeBlock";
import SlideShow from "../SlideShow/SlideShow";
import useStore from "@/app/store/useStore";
import projectData from "@/utils/projectData";

interface ProjecDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail = ({ onClose, project }: ProjecDetailProps) => {
  const { projectName, codeBreakDown, mainTakeAway, mediaPath } = project;
  const { onHoverStartStore, onHoverEndStore, preloadedSources } = useStore();

  const gifUrl = preloadedSources.find(
    ({ mediaPath: path }) => path === mediaPath
  )?.url;

  return (
    <S.Container>
      <S.Panel>
        <S.SectionContainer>
          <S.DescriptionTitle>The Project</S.DescriptionTitle>
          {mainTakeAway.map((description, i) => (
            <S.DescriptionText
              key={i}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          ))}
        </S.SectionContainer>

        <S.SectionContainer>
          <S.DescriptionTitle>Code Breakdown</S.DescriptionTitle>
          {codeBreakDown.map(({ text, codeSnippet }) => (
            <S.SectionContainer key={text}>
              <CodeBlock code={codeSnippet} />
              <S.DescriptionText dangerouslySetInnerHTML={{ __html: text }} />
            </S.SectionContainer>
          ))}
        </S.SectionContainer>
      </S.Panel>

      <S.RightPanel>
        <SlideShow gifSource={gifUrl!} />
      </S.RightPanel>

      <S.TitleContainer>
        <S.ProjectTitle>{projectName}</S.ProjectTitle>
        <S.GoBack
          onClick={onClose}
          onHoverStart={onHoverStartStore}
          onHoverEnd={onHoverEndStore}
        />
      </S.TitleContainer>
    </S.Container>
  );
};

export default ProjectDetail;
