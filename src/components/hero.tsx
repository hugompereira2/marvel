"use client";

import styled from "styled-components";
import Image from 'next/image';
import HeroImg from "../assets/hero.svg"

const StyledSection = styled.section`
  padding: 0 2rem;
  display: flex;
  width: 100%;
  height: 100%;
`;

const StyledH1 = styled.h1`
  font-size: 3rem;
  font-weight: 700;
`;

const StyledP = styled.p`
  font-size: 1.5rem;
`;

const StyledImgContainer = styled.div`
  flex: 1;

  img {
    max-height: 650px;
  }
`;

const StyledHeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10rem 3.8rem;
  gap: 3rem;
  flex: 1;
`;

const StyledButton = styled.div`
  cursor: pointer;
  display: flex;
  font-size: 1.125rem;
  justify-content: center;
  align-items: center;
  width: 171px;
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
        <StyledH1>Visualize Your Colors <br /> On a Real Website</StyledH1>
        <StyledP>
          Choosing a color palette for your website? Use the Toolbar below to
          realize your choices.
        </StyledP>
        <StyledButton>
          Get started
        </StyledButton>
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
