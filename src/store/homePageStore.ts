import type { Photo } from "../types/photo";

let cachedPhotos: Photo[] = [];
let cachedPage = 2;
let cachedSearchQuery = "";
let cachedSearchPhotos: Photo[] = [];
let cachedSearchPage = 1;

export const setHomePageState = (photos: Photo[], page: number) => {
  cachedPhotos = photos;
  cachedPage = page;
};

export const getHomePageState = () => ({
  photos: cachedPhotos,
  page: cachedPage,
});

export const setSearchState = (
  photos: Photo[],
  page: number,
  query: string
) => {
  cachedSearchPhotos = photos;
  cachedSearchPage = page;
  cachedSearchQuery = query;
};

export const getSearchState = () => ({
  photos: cachedSearchPhotos,
  page: cachedSearchPage,
  query: cachedSearchQuery,
});

export const clearHomePageState = () => {
  cachedPhotos = [];
  cachedPage = 2;
};

export const clearSearchState = () => {
  cachedSearchPhotos = [];
  cachedSearchPage = 1;
  cachedSearchQuery = "";
};
