import projectData from "../projectData";

export type Project = (typeof projectData)[number];

export type PanPosition = {
  xtransform: number;
  ytransform: number;
  xPercent: number;
  yPercent: number;
};

export type StartPos = {
  x: number;
  y: number;
};

export type SetPanPosition = React.Dispatch<React.SetStateAction<PanPosition>>;
export type SetStartPos = React.Dispatch<React.SetStateAction<StartPos>>;
export type SetTransform = React.Dispatch<React.SetStateAction<PanPosition>>;

export enum Mode {
  GALLERY = 1,
  CLASSIC = 2,
}
