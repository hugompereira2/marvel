import { InputHTMLAttributes, useEffect } from "react";
import { styled } from "styled-components";
import { SearchIcon } from "./icons/search-icon";
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";
import { useFilter } from "@/hooks/useFilter";

export const PrimaryInput = styled.input`
  width: 352px;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 10px 50px 10px 16px;
  background: var(--bg-secondary);
  &:focus {
    border: 1px solid red;
    outline-color: #737380;
  }
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: var(--text-dark);

  @media screen and (max-width:450px) {
    width: 290px;
  }
`;

const InputContainer = styled.div`
  position: relative;
  width: 352px;
  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media screen and (max-width:450px) {
    width: 290px;
  }
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  handleChange: (value: string) => void;
}

export default function SearchInput(props: InputProps) {
  const { loaded } = useFilter();

  const { handleChange, ...inputProps } = props;

  return (
    <InputContainer>
      <PrimaryInput onChange={(event) => handleChange(event.target.value)} {...inputProps} />
      <SearchIcon />
    </InputContainer>
  );
}
