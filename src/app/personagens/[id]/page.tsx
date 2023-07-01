"use client"

import CharacterList from "@/components/characterList";
import { styled } from "styled-components";
import { getCharacterById } from "@/api/api";
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

// async function getData() {
//   const res = await fetch('https://gateway.marvel.com/v1/public/characters/1011334?apikey=cca61f51700a5039fc1e7fb464c5933f')
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   // Recommendation: handle errors
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }

//   return res.json()
// }

export default async function CharacterPage({ params: { id } }: PageProps) {
  const [character, setCharacters] = useState();

  const fetchChacter = async () => {
    const resp = await getCharacterById(parseInt(id))
    console.log(resp)
  }

  useEffect(() => {
    fetchChacter();
  }, [])

  return (
    <main>
      <StyledContainer>
      </StyledContainer>
    </main>
  );
}
