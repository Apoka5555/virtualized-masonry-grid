import styled, { keyframes } from "styled-components";
import { Info, Photographer, Description, ImageWrapper } from "./PhotoDetails";

const shimmer = keyframes`
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`;

const SkeletonBox = styled.div<{ width?: string; height?: string }>`
  background: linear-gradient(90deg, #e3e9f3 0%, #f8fafc 50%, #e3e9f3 100%);
  background-size: 400px 100%;
  animation: ${shimmer} 1.2s infinite linear;
  border-radius: 8px;
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "18px"};
`;

const SkeletonImageWrapper = styled(ImageWrapper)`
  /* Same styles as ImageWrapper but with skeleton content */
`;

const SkeletonImage = styled(SkeletonBox)`
  max-width: 100%;
  width: 100%;
  height: 400px;
  border-radius: 10px;
`;

export const PhotoDetailsSkeleton = () => (
  <>
    <SkeletonImageWrapper>
      <SkeletonImage />
    </SkeletonImageWrapper>
    <Info>
      <Photographer>
        <SkeletonBox width="60%" />
      </Photographer>
      <Description>
        <SkeletonBox width="80%" />
      </Description>
    </Info>
  </>
);
