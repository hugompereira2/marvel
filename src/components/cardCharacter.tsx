import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import Link from 'next/link';
import "react-loading-skeleton/dist/skeleton.css";

interface CardCharacterProps {
  url: string | null;
  name: string | null;
  id: number | null;
}

const Card = styled(Link)`
  display: flex;
  position: relative;
  flex-direction: column;
  min-height: 460px;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  border-radius: 25px 25px 0 0;
  background: var(--secondary-button);
  
  transition: 0.2s all;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const StyledSpan = styled.span`
  flex: 1;
  padding: 0.5rem 0;
  font-size: 1.2rem;
  color: white;
`;

const Image = styled.img`
  height: 420px;
  width: 100%;
  object-fit: cover;
`;

const CardCharacter = ({ url, name, id }: CardCharacterProps) => {

  const handleCardClick = () => {

  }

  return (
    <Card href={`/personagens/${id}`}>
      {url ? (
        <Image src={url} alt="Character Image" />
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

export default CardCharacter;
