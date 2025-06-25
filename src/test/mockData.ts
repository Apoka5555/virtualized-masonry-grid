import type { Photo } from "../types/photo";

export const mockPhotos: Photo[] = [
  {
    id: 1,
    url: "https://example.com/photo1.jpg",
    width: 400,
    height: 600,
    photographer: "John Doe",
    alt: "Beautiful landscape",
  },
  {
    id: 2,
    url: "https://example.com/photo2.jpg",
    width: 500,
    height: 300,
    photographer: "Jane Smith",
    alt: "City skyline",
  },
  {
    id: 3,
    url: "https://example.com/photo3.jpg",
    width: 300,
    height: 400,
    photographer: "Bob Wilson",
    alt: "Ocean waves",
  },
];

export const mockPexelsResponse = {
  photos: [
    {
      id: 1,
      src: {
        large: "https://example.com/photo1.jpg",
      },
      width: 400,
      height: 600,
      photographer: "John Doe",
      alt: "Beautiful landscape",
    },
    {
      id: 2,
      src: {
        large: "https://example.com/photo2.jpg",
      },
      width: 500,
      height: 300,
      photographer: "Jane Smith",
      alt: "City skyline",
    },
  ],
};
