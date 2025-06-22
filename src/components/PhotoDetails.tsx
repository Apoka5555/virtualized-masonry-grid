import styled from "styled-components";
import type { Photo } from "../types/photo";

export const PhotoDetails = ({ photo }: { photo: Photo }) => (
  <>
    <Image src={photo.url} alt={photo.alt} />
    <Info>
      <Photographer>
        <Label>Photographer:</Label> {photo.photographer}
      </Photographer>
      <Description>
        <Label>Description:</Label> {photo.alt}
      </Description>
    </Info>
  </>
);

const Image = styled.img`
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  font-family: "Segoe UI", "Roboto", Arial, sans-serif;
  color: #22223b;
`;

export const Photographer = styled.p`
  font-size: 1.15rem;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 1.05rem;
  margin: 0;
  color: #4a4e69;
`;

const Label = styled.span`
  font-weight: bold;
  color: #007bff;
  margin-right: 0.5rem;
`;
