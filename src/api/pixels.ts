import type { PexelsPhoto, Photo } from "../types/photo";

const apiUrl = import.meta.env.VITE_API_URL;

export const fetchPhotos = async (page: number): Promise<Photo[]> => {
  const response = await fetch(`${apiUrl}/curated?page=${page}&per_page=30`, {
    headers: {
      Authorization: import.meta.env.VITE_PEXELS_API_KEY,
    },
  });
  const data = await response.json();

  return data.photos.map((p: PexelsPhoto) => ({
    id: p.id,
    url: p.src.large,
    width: p.width,
    height: p.height,
    photographer: p.photographer,
    alt: p.alt,
  }));
};

export const fetchPhotoById = async (id: number): Promise<Photo> => {
  const response = await fetch(`${apiUrl}/photos/${id}`, {
    headers: {
      Authorization: import.meta.env.VITE_PEXELS_API_KEY,
    },
  });
  const p = await response.json();
  return {
    id: p.id,
    url: p.src.large,
    width: p.width,
    height: p.height,
    photographer: p.photographer,
    alt: p.alt,
  };
};
