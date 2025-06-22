import type { Photo } from "../types/photo";

let cachedPhotos: Photo[] = [];
let cachedPage = 2;

export const setHomePageState = (photos: Photo[], page: number) => {
  cachedPhotos = photos;
  cachedPage = page;
};

export const getHomePageState = () => ({
  photos: cachedPhotos,
  page: cachedPage,
});

export const clearHomePageState = () => {
  cachedPhotos = [];
  cachedPage = 1;
};
