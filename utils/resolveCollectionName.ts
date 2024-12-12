export const resolveCollectionName = (
  xPercent: number,
  yPercent: number,
  handleCollectionNameChange: (category: string) => void
) => {
  xPercent <= 60 && handleCollectionNameChange("Design");
  xPercent >= 60 && handleCollectionNameChange("Development");
};

export const resolveCollectionNameMobile = (
  xTransform: number,
  yTransform: number,
  dimensions: { width: number; height: number },
  changeCollectionName: (collectionName: string) => void
) => {
  const { width, height } = dimensions;
  if (xTransform < -width / 2) {
    changeCollectionName("Design");
    return;
  } else {
    changeCollectionName("Development");
  }
};
