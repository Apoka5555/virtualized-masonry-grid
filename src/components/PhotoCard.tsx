import styled from "styled-components";
import type { Photo } from "../types/photo";
import { Link } from "react-router-dom";

export const PhotoCard = ({ photo }: { photo: Photo }) => (
  <Card>
    <Link to={`/photo/${photo.id}`}>
      <Img src={photo.url} alt={photo.alt} loading="lazy" />
    </Link>
  </Card>
);

const Card = styled.div`
  break-inside: avoid;
  margin-bottom: 1rem;
`;
const Img = styled.img`
  width: 100%;
  display: block;
`;
