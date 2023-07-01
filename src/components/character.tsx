"use client"

import { getCharacters } from "@/api/api";
import { useLoaded } from "@/hooks/useLoaded";
import { Character } from "@/types/character";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import CardCharacter from "@/components/cardCharacter"

const Grid = styled.div`
  padding: 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-gap: 1.5rem;
  margin: 0 auto;
  justify-content: center;
`;

export default function Character() {
    const [characters, setCharacters] = useState<Character[]>([])
    const { page, loaded, setLoaded } = useLoaded()

    const fetchCharacters = async () => {
        const resp = await getCharacters();

        if (resp.code === 200) {
            setCharacters(resp.data.results);
            setLoaded(true);
        }
    };

    useEffect(() => {
        fetchCharacters();
    }, [page]);

    return (
        <Grid>
            {characters && characters.length > 0 ? (
                characters.map((character) => (
                    <CardCharacter
                        key={character.id}
                        url={`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`}
                        name={character.name}
                        id={character.id}
                    />
                ))
            ) : (
                Array.from({ length: 20 }).map((_, index) => (
                    <CardCharacter
                        key={index}
                        url={null}
                        name={null}
                        id={null}
                    />
                ))
            )}
        </Grid>
    )
}