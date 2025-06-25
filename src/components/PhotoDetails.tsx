import styled from "styled-components";
import type { Photo } from "../types/photo";

export const PhotoDetails = ({ photo }: { photo: Photo }) => (
  <>
    <ImageWrapper>
      <Image src={photo.url} alt={photo.alt} />
    </ImageWrapper>
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

export const ImageWrapper = styled.div`
  flex: 1 1 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  padding: 1rem;
  min-height: 400px;
  width: 100%;
`;

export const Image = styled.img`
  max-width: 100%;
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
`;

export const Info = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.5rem;
  font-family: "Segoe UI", "Roboto", Arial, sans-serif;
  color: #22223b;
  padding: 1rem;
`;

export const Photographer = styled.p`
  font-size: 1.15rem;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 1.05rem;
  margin: 0;
  color: #4a4e69;
  line-height: 1.6;
`;

const Label = styled.span`
  font-weight: bold;
  color: #007bff;
  margin-right: 0.5rem;
`;
