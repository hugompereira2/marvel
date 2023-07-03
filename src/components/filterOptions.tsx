import styled from 'styled-components';
import SearchInput from "./searchInput";
import PageNumber from "./pageNumber";
import { useEffect, useState } from "react";
import { useFilter } from "@/hooks/useFilter";

interface FilterOptionsProps {
  isSearch?: boolean;
}

const StyledDiv = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  max-width: 1270px;
  gap: 1rem;
  margin: 0 auto;

  @media screen and (max-width: 720px) {
    justify-content: center !important;
  }
`;


const FilterOptions = ({ isSearch = false }: FilterOptionsProps) => {
  const [searchValue, setSearchValue] = useState("");
  const { page, loaded, setPage, setCharacterList, setSearchWord } = useFilter()

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPage(1);
      setSearchWord(searchValue);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchValue]);

  return (
    <StyledDiv style={{ justifyContent: isSearch ? "space-between" : "center" }}>
      {
        isSearch &&
        <SearchInput value={searchValue} handleChange={setSearchValue} placeholder="Procurando por algo específico?" />
      }
      <PageNumber />
    </StyledDiv>
  );
};

export default FilterOptions;
