export const resolveCollectionName = (
  xPercent: number,
  yPercent: number,
  handleCollectionNameChange: (category: string) => void
) => {
  xPercent <= 60 && handleCollectionNameChange("FRONTEND");
  xPercent >= 60 && handleCollectionNameChange("BACKEND");
};

export const resolveCollectionNameMobile = (
  xTransform: number,
  yTransform: number,
  dimensions: { width: number; height: number },
  changeCollectionName: (collectionName: string) => void
) => {
  const { width, height } = dimensions;
  if (xTransform < -width / 2) {
    changeCollectionName("BACKEND");
    return;
  } else {
    changeCollectionName("FRONTEND");
  }
};
