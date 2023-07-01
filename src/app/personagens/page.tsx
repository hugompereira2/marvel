"use client"

import CharacterList from "@/components/characterList";
import { styled } from "styled-components";
import FilterOptions from "@/components/filterOptions";
import { LoadedContextProvider } from '@/contexts/loadedContext';

const StyledContainer = styled.div`
  max-width: 1300px;
  padding: 2rem 0;
  margin: 0 auto;
`;

export default function Characters() {

  return (
    <main>
      <StyledContainer>
        <LoadedContextProvider>
          <FilterOptions isSearch />
          <CharacterList />
          <FilterOptions />
        </LoadedContextProvider>
      </StyledContainer>
    </main>
  );
}
