"use client";

import styled from "styled-components";
import Image from 'next/image';
import HeroImg from "../assets/hero.svg"
import Link from 'next/link';

const StyledSection = styled.section`
  padding: 0 2rem;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 400px) {
    padding: 0;
  }
`;

const StyledH1 = styled.h1`
  font-size: 3rem;
  font-weight: 700;

  @media screen and (max-width: 400px) {
    font-size: 2rem;
  }
`;

const StyledP = styled.p`
  font-size: 1.5rem;
`;

const StyledImgContainer = styled.div`
  flex: 1;

  img {
    max-height: 650px;
  }

  @media screen and (max-width: 1160px) {
    display: none;
  }
`;

const StyledHeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem 3.8rem;
  gap: 3rem;
  flex: 1;

  @media screen and (max-width: 675px) {
    padding: 3.5rem 0;
  }
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  display: flex;
  font-size: 1.125rem;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 57px;
  border: none;
  background: var(--primary-button);
  border-radius: 6px;
  transition: 0.2s all;

  &:hover {
    transform: translate(0, -3px);
    box-shadow: 0 0 80px -10px var(--primary-button);
  }
`;

const Hero = () => {
  return (
    <StyledSection>
      <StyledHeroInfo>
        <StyledH1>Explore o Universo Marvel e Descubra os Heróis Mais Incríveis</StyledH1>
        <StyledP>
          Aventure-se em um Mundo de Fantasia e Conheça as Histórias Épicas dos Personagens Mais Adorados.
        </StyledP>
        <StyledLink href="/personagens">
          Explore o Universo Marvel
        </StyledLink>
      </StyledHeroInfo>
      <StyledImgContainer>

        <Image
          priority
          src={HeroImg}
          alt="Marvel"
        />
      </StyledImgContainer>
    </StyledSection>
  );
};
export default Hero;
