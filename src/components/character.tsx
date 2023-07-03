"use client"

import { getCharacters } from "@/api/api";
import { useFilter } from "@/hooks/useFilter";
import { Character } from "@/types/types";
import { HTMLAttributes, useEffect, useState } from "react";
import { css, styled } from "styled-components";
import CardCharacter from "@/components/cardCharacter"
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SmallCard from "./smallCard";

const CharacterContainer = styled.div`
  width: 100%;
  overflow: hidden;
  text-align: center;
`;

const Grid = styled.div`
  margin-top: 2rem;
  padding: 2rem 0;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  grid-gap: 1.5rem;
  margin: 0 auto;
  justify-content: center;
`;

const CharacterInfo = styled.div<{ show?: string }>`
  display: ${({ show }) => (show ? "flex" : "none")};
  margin: 2rem auto;
  min-height: 300px;
  max-width: 865px;
  border-radius: 12px;
  justify-content: center;
  background: var(--bg-secondary);

 box-shadow: 0px 0px 50px 3px rgba(236,29,36,0.4);
 -webkit-box-shadow: 0px 0px 50px 3px rgba(236,29,36,0.4);
 -moz-box-shadow: 0px 0px 50px 3px rgba(236,29,36,0.4);
`;

const SquareCharacter = styled.img<{ onLoad?: Function }>`
  border-radius: 12px 0 0 12px;
  height: 300px;
  object-fit: cover;
`;

const StyledH2 = styled.h2`
  margin-top: 4rem;
`;

const CharacterTextBox = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 2.5rem 2rem;
`;

const CharacterText = styled.p`
  text-align: justify;
  font-size: 1.2rem;
  color: var(--background);
`;

interface CharacterProps {
    character: Character | undefined;
}

export default function Character({ character }: CharacterProps) {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setIsImageLoaded(true);
    };

    return (
        <CharacterContainer>
            <h2>{character ? character.name : <Skeleton containerClassName="flex-1" baseColor="#202224" highlightColor="#313131" />}</h2>
            {character ?
                <CharacterInfo show={isImageLoaded ? "true" : undefined}>
                    <SquareCharacter
                        src={`${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`}
                        onLoad={handleImageLoad}
                    />
                    <CharacterTextBox>
                        <CharacterText>
                            {character.description
                                ? character.description
                                : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique risus sit amet ipsum ultrices congue. Curabitur a velit eget quam vehicula commodo. Cras congue aliquam ipsum, vitae rhoncus justo pharetra in. Nullam tincidunt vehicula tempor. Nullam ultricies interdum dolor, scelerisque maximus nisl bibendum eu."}
                        </CharacterText>
                    </CharacterTextBox>
                    {!isImageLoaded && <Skeleton style={{ marginTop: "2rem" }} containerClassName="flex-1" baseColor="#202224" highlightColor="#313131" width={865} height={300} />}
                </CharacterInfo>
                :
                <Skeleton style={{ marginTop: "2rem" }} containerClassName="flex-1" baseColor="#202224" highlightColor="#313131" width={865} height={300} />
            }
            <StyledH2>{character ? `Quadrinhos de ${character.name}` : <Skeleton containerClassName="flex-1" baseColor="#202224" highlightColor="#313131" />}</StyledH2>
            <Grid>
                {
                    character ?
                        character.comicSimplified?.map((item) => {
                            return <SmallCard
                                key={item.title}
                                url={`${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`}
                                name={item.title} />;
                        })
                        :
                        (
                            Array.from({ length: 4 }).map((_, index) => (
                                <SmallCard key={index} url={null} name={null} />
                            ))
                        )
                }
            </Grid>
        </CharacterContainer>
    )
}