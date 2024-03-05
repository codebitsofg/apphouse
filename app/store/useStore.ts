import { PreloadedSources } from "@/utils/Preloader";
import { create } from "zustand";

interface Store {
  isHovered: boolean;
  links: { live: string; repo: string };
  preloadedSources: PreloadedSources;
  onHoverStartStore: () => void;
  onHoverEndStore: () => void;
  setLink: (live: string, repo: string) => void;
  setPreloadedSources: (preloadedSources: PreloadedSources) => void;
}

const useStore = create<Store>((set) => ({
  isHovered: false,
  onHoverStartStore: () => set({ isHovered: true }),
  onHoverEndStore: () => set({ isHovered: false }),
  links: { live: "", repo: "" },
  setLink: (live, repo) => set({ links: { live, repo } }),
  preloadedSources: [],
  setPreloadedSources: (preloadedSources) => set({ preloadedSources }),
}));

export default useStore;
