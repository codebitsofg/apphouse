import * as S from "./SlideShow.styles";
interface SlideShowProps {
  gifSource: string;
}

const SlideShow = ({ gifSource }: SlideShowProps) => {
  return (
    <S.Container>
      <S.Gif key={gifSource} src={gifSource} />
    </S.Container>
  );
};

export default SlideShow;
