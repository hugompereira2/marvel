import styled from 'styled-components';
import { Bebas_Neue, Roboto } from 'next/font/google';
import { useState } from "react";
import { useLoaded } from "@/hooks/useLoaded";

const roboto = Roboto({ weight: "700", subsets: ['latin'] });

interface pageNumberProps {
  url: string;
  name: string;
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const StyledSpan = styled.button`
  height: 25px;
  width: 25px;
  display: flex;
  font-family: inherit;
  justify-content: center;
  border: none;
  align-items: center;
  border-radius: 4px;
  font-weight: 600;
  color: var(--text-darker);
  font-weight: 600;
  cursor: pointer;
  background: #e9e9f0;
`;

const pageNumber: React.FC<any> = ({ url, name }) => {
  const { loaded, setPage } = useLoaded();


  return (
    loaded &&
    <StyledDiv className={roboto.className}>
      <StyledSpan onClick={() => setPage(1)}>1</StyledSpan>
      <StyledSpan onClick={() => setPage(2)}>2</StyledSpan>
      <StyledSpan onClick={() => setPage(3)}>3</StyledSpan>
      <StyledSpan onClick={() => setPage(4)}>4</StyledSpan>
      <StyledSpan onClick={() => setPage(5)}>5</StyledSpan>
      <StyledSpan>&lt;</StyledSpan>
      <StyledSpan>&gt;</StyledSpan>
    </StyledDiv >
  );
};

export default pageNumber;
