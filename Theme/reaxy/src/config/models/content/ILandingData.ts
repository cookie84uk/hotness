type ImagePath = string;

export interface ILandingData {
  title: string;
  img: ImagePath;
  get: () => void;
}