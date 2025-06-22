export interface Photo {
  id: number;
  url: string;
  width: number;
  height: number;
  photographer: string;
  alt: string;
}

export interface PexelsPhoto {
  id: number;
  src: { large: string };
  width: number;
  height: number;
  photographer: string;
  alt: string;
}
