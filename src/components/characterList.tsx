"use client"

import { useFilter } from "@/hooks/useFilter";
import React from "react";
import { styled } from "styled-components";
import CardCharacter from "@/components/cardCharacter"

const Grid = styled.div`
  padding: 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-gap: 1.5rem;
  margin: 0 auto;
  justify-content: center;

  @media screen and (max-width: 400px) {
      grid-template-columns: repeat(auto-fit, 250px);
  }

`;

const StyledFullContainer = styled.div`
  min-height: 70vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function CharacterList() {
    const { loaded, characterList } = useFilter()

    return (
        <>
            {
                loaded ?
                    characterList?.length > 0 ?
                        <Grid>
                            {characterList.map((character) => (
                                <CardCharacter
                                    key={character.id}
                                    url={`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`}
                                    name={character.name}
                                    id={character.id}
                                />
                            ))}
                        </Grid>
                        :
                        <StyledFullContainer>
                            <h3>Nenhum resultado encontrado.</h3>
                        </StyledFullContainer>
                    : (
                        <Grid>
                            {Array.from({ length: 20 }).map((_, index) => (
                                <CardCharacter
                                    key={index}
                                    url={null}
                                    name={null}
                                    id={null}
                                />
                            ))}
                        </Grid>
                    )
            }
        </>
    );
}