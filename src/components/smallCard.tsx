import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import "react-loading-skeleton/dist/skeleton.css";

interface SmallCardProps {
  url: string | null;
  name: string | null;
}

const Card = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  user-select: none;
  background: var(--secondary-button);
  
  transition: 0.2s all;
`;

const StyledSpan = styled.span`
  flex: 1;
  padding: 0.5rem 0;
  font-size: 1.2rem;
  color: white;
  display: inline-flex;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  user-select: none;
  object-fit: cover;
`;

const SkeletonContainer = styled.div`
  width: 100%;
  height: 420px;
`;

const SmallCard = ({ url, name }: SmallCardProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current) {
      if (isImageLoaded) {
        imgRef.current.setAttribute('data-is-loaded', 'true');
      } else {
        imgRef.current.removeAttribute('data-is-loaded');
      }
    }
  }, [isImageLoaded]);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <Card>
      {url ? (
        <>
          <Image ref={imgRef} src={url} alt="Character Image" onLoad={handleImageLoad} />
          {!isImageLoaded && <SkeletonContainer><Skeleton containerClassName="flex-1" baseColor="#202224" highlightColor="#313131" width={300} height={420} /></SkeletonContainer>}
        </>
      ) : (
        <Skeleton containerClassName="flex-1" baseColor="#202224" highlightColor="#313131" width={300} height={420} />
      )}
      {name ? (
        <StyledSpan>{name}</StyledSpan>
      ) : (
        <Skeleton containerClassName="flex-1" baseColor="#202224" highlightColor="#313131" width={300} height={40} />
      )}
    </Card>
  );
};

export default SmallCard;
