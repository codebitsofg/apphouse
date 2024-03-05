import projectData from "./projectData";

interface IPreloader {
  handleRequestEnd: (urls: string[]) => void;
  handleProgress: (progress: number) => void;
}

type Resolve = (value: string) => void;

class Preloader {
  handleRequestEnd;
  handleProgress;
  urlsToPreload: string[];
  preloadedSources: string[];
  loadedMedia = 0;
  mediaCount = 11;
  progress = 0;

  constructor({ handleRequestEnd, handleProgress }: IPreloader) {
    this.handleRequestEnd = handleRequestEnd;
    this.handleProgress = handleProgress;
    this.urlsToPreload = projectData.map(({ mediaPath }) => mediaPath);
    this.preloadedSources = [];
    this.preloadAll();
  }

  addPrefix = (path: string) => `/media/${path}/gif.gif`;

  onLoad = (resolve: any, xhr: XMLHttpRequest) => {
    this.loadedMedia++;

    const percantage = this.loadedMedia / this.mediaCount;
    this.handleProgress(Math.ceil(percantage * 100));

    if (this.loadedMedia === this.mediaCount) {
      this.handleRequestEnd(this.preloadedSources);
    }

    resolve(URL.createObjectURL(xhr.response));
  };

  preload = (url: string) => {
    return new Promise((resolve: Resolve, _) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = () => this.onLoad(resolve, xhr);

      xhr.open("GET", url, true);
      xhr.responseType = "blob";
      xhr.send(null);
    });
  };

  preloadAll = async () => {
    await Promise.all(
      this.urlsToPreload.map(async (mediaPath: string) => {
        this.preloadedSources.push(
          await this.preload(this.addPrefix(mediaPath))
        );
      })
    );
  };
}

export default Preloader;
