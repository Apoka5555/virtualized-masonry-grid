import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { PhotoDetails } from "../components/PhotoDetails";
import type { Photo } from "../types/photo";
import { fetchPhotoById } from "../api/pixels";
import { PhotoDetailsSkeleton } from "../components/PhotoDetailsSkeleton";

export const PhotoPage = () => {
  const { id } = useParams();
  const [photo, setPhoto] = useState<Photo | null>(null);
  const hasMounted = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!hasMounted.current && id) {
      hasMounted.current = true;
      fetchPhotoById(Number(id)).then(setPhoto);
    }
  }, [id]);

  return (
    <Container>
      <BackButton onClick={() => navigate(-1)}>← Back</BackButton>
      <Wrapper>
        {!photo ? <PhotoDetailsSkeleton /> : <PhotoDetails photo={photo} />}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 24px 24px 24px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const BackButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 10px 18px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 24px;
  transition: background 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: flex-start;
  background: linear-gradient(120deg, #f8fafc 0%, #e3e9f3 100%);
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  padding: 2.5rem 2rem;
  margin-top: 10px;
  width: 100%;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 1rem;
    gap: 1.5rem;
    min-height: auto;
  }
`;
