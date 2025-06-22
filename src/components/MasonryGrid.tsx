import styled from "styled-components";
import { PhotoCard } from "./PhotoCard";
import type { Photo } from "../types/photo";

interface Props {
  photos: Photo[];
}

export const MasonryGrid = ({ photos }: Props) => (
  <Grid>
    {photos.map((photo) => (
      <PhotoCard key={photo.id} photo={photo} />
    ))}
  </Grid>
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  column-gap: 1rem;
  padding: 1rem;
`;
