import styled from "styled-components";
import type { Photo } from "../types/photo";
import { Link } from "react-router-dom";

export const PhotoCard = ({ photo }: { photo: Photo }) => (
  <Card>
    <StyledLink to={`/photo/${photo.id}`}>
      <Img src={photo.url} alt={photo.alt} loading="lazy" />
    </StyledLink>
  </Card>
);

const Card = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  background: #fff;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  border-radius: 12px;
`;
