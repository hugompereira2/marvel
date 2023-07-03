"use client"

import CharacterList from "@/components/characterList";
import { styled } from "styled-components";
import FilterOptions from "@/components/filterOptions";
import { FilterContextProvider } from '@/contexts/filterContext';

const StyledContainer = styled.div`
  max-width: 1300px;
  padding: 2rem 0;
  margin: 0 auto;
`;

export default function Characters() {

  return (
    <main>
      <StyledContainer>
        <FilterContextProvider>
          <FilterOptions isSearch />
          <CharacterList />
          <FilterOptions />
        </FilterContextProvider>
      </StyledContainer>
    </main>
  );
}
