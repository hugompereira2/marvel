import styled from 'styled-components';
import SearchInput from "./searchInput";
import PageNumber from "./pageNumber";
import { useState } from "react";

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
`;


const FilterOptions = ({ isSearch = false }: FilterOptionsProps) => {
  const [showSearch, setShowSearch] = useState("");

  return (
    <StyledDiv style={{ justifyContent: isSearch ? "space-between" : "flex-end" }}>
      {
        isSearch &&
        <SearchInput value={showSearch} handleChange={setShowSearch} placeholder="Procurando por algo específico?" />
      }
      <PageNumber />
    </StyledDiv>
  );
};

export default FilterOptions;
