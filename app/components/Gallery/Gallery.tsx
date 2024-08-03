import useMousePosition from "@/utils/hooks/useMousePosition";
import { useCallback, useEffect, useRef, useState } from "react";
import * as S from "./Gallery.styles";
import ProjectRect from "../ProjectRect/ProjectRect";
import { AnimatePresence } from "framer-motion";
import projectData from "@/utils/projectData";
import useStore from "@/app/store/useStore";

interface GalleryProps {
  onProjectClick: (i: number) => void;
}
const Gallery = ({ onProjectClick }: GalleryProps) => {
  const parentContainer = useRef<HTMLDivElement>(null);
  const { springX, springY, category } = useMousePosition(parentContainer);
  const [hoveredWork, setHoveredWork] = useState<number | undefined>(undefined);
  const [isProjectDetailVisible, setIsProjectDetailVisible] = useState(false);
  const { onHoverStartStore, onHoverEndStore } = useStore();
  const style = { x: springX ?? 0, y: springY ?? 0 };

  const onHoverStart = useCallback((i: number) => {
    onHoverStartStore();
    setHoveredWork(i);
  }, []);

  const onHoverEnd = useCallback(() => {
    onHoverEndStore();
    setHoveredWork(undefined);
  }, []);

  return (
    <S.Container key={"22442"} ref={parentContainer}>
      <S.CollectionNameContainer>
        <S.CollectionName key={category}>{category}</S.CollectionName>
      </S.CollectionNameContainer>

      <AnimatePresence>
        {typeof hoveredWork === "number" && (
          <S.ProjectInfoContainer>
            <S.Name>{projectData[hoveredWork].projectName}</S.Name>
            <S.ShortDescription>
              {projectData[hoveredWork].shortDesc}
            </S.ShortDescription>
          </S.ProjectInfoContainer>
        )}
      </AnimatePresence>

      <S.InnerWrapper style={{ ...style }}>
        <S.BoxContainer>
          {projectData.map(
            ({ rectPosition: { top, left }, projectName, mediaPath }, i) => (
              <ProjectRect
                key={i}
                onHoverStart={() => onHoverStart(i)}
                onHoverEnd={onHoverEnd}
                onClick={() => onProjectClick(i)}
                top={top}
                left={left}
                mediaPath={mediaPath}
              >
                {projectName}
              </ProjectRect>
            )
          )}
        </S.BoxContainer>
      </S.InnerWrapper>
    </S.Container>
  );
};

export default Gallery;
