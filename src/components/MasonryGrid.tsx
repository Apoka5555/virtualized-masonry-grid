import styled from "styled-components";
import { PhotoCard } from "./PhotoCard";
import type { Photo } from "../types/photo";
import { useMemo } from "react";

interface Props {
  photos: Photo[];
}

export const MasonryGrid = ({ photos }: Props) => {
  const memoizedPhotos = useMemo(() => photos, [photos]);

  return (
    <MasonryContainer>
      {memoizedPhotos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </MasonryContainer>
  );
};

const MasonryContainer = styled.div`
  columns: 280px;
  column-gap: 16px;
  padding: 1rem;

  > * {
    break-inside: avoid;
    margin-bottom: 16px;
    display: inline-block;
    width: 100%;
  }

  @media (max-width: 768px) {
    columns: 220px;
    column-gap: 12px;

    > * {
      margin-bottom: 12px;
    }
  }

  @media (max-width: 480px) {
    columns: 160px;
    column-gap: 8px;

    > * {
      margin-bottom: 8px;
    }
  }
`;
