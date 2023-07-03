"use client"

import Character from "@/components/character";
import { styled } from "styled-components";
import { getCharacterById, getCharacterComicsById } from "@/api/api";
import { Character as CharacterProps, Comic } from "@/types/types";
import { useEffect, useState } from "react";

const StyledContainer = styled.div`
  padding: 2rem 0;
  margin: 0 auto;
`;

interface PageProps {
  params: {
    id: string;
  };
}

export default function CharacterPage({ params: { id } }: PageProps) {
  const [character, setCharacter] = useState<CharacterProps>();

  const fetchCharacterInfo = async () => {
    const [characterResp, comicsResp] = await Promise.all([
      getCharacterById(parseInt(id)),
      getCharacterComicsById(parseInt(id))
    ]);

    if (characterResp.code === 200 && comicsResp.code === 200) {
      const characterFound = characterResp.data.results[0] as CharacterProps;
      const comicsFound: Comic[] = comicsResp.data.results;
      setCharacter({comicSimplified: comicsFound, ...characterFound});
    }
  }

  useEffect(() => {
    fetchCharacterInfo();
  }, [id])

  return (
    <StyledContainer>
      <Character character={character} />
    </StyledContainer>
  );
}
