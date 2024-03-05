import { useEffect, useRef, useState } from "react";
import Preloader, { PreloadedSources } from "@/utils/Preloader";
import useStore from "@/app/store/useStore";

const usePreloder = () => {
  const [isPreloaded, setisPreloaded] = useState<boolean>(false);
  const { setPreloadedSources } = useStore();

  const [progress, setProgress] = useState(0);
  const preloader = useRef<Preloader | null>(null);

  const handleRequestEnd = (urls: PreloadedSources) => {
    setPreloadedSources(urls);
    setisPreloaded(true);
  };

  const handleProgress = (progress: number) => {
    setProgress(progress);
  };

  useEffect(() => {
    preloader.current = new Preloader({ handleRequestEnd, handleProgress });
  }, []);

  return { isPreloaded, progress };
};

export default usePreloder;
