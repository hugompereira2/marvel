import { useFilter } from "@/hooks/useFilter";
import React from 'react';
import styled from 'styled-components';

const PageNumberContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const PageButton = styled.button<{ isActive: boolean }>`
  height: 33px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  color: var(--text-darker);
  cursor: pointer;
  background: #e9e9f0;
  ${({ isActive }) =>
    isActive &&
    `
    background: var(--primary-button);
    color: white;
    font-weight: 800;
  `}
`;

const PageNumber = () => {
  const { page, setPage, totalItems } = useFilter()

  const totalPages = Math.ceil(totalItems / 20);
  const maxVisiblePages = 5;

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const getPageNumbers = () => {
    const pages: number[] = [];
    const maxPages = Math.min(totalPages, maxVisiblePages);

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else if (page <= maxPages - Math.floor(maxVisiblePages / 2)) {
      for (let i = 1; i <= maxPages; i++) {
        pages.push(i);
      }
    } else if (page >= totalPages - Math.floor(maxVisiblePages / 2)) {
      for (let i = totalPages - maxPages + 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const maxLeft = page - Math.floor(maxVisiblePages / 2);
      const maxRight = maxLeft + maxPages - 1;

      for (let i = maxLeft; i <= maxRight; i++) {
        pages.push(i);
      }
    }

    return pages;
  };

  return (
    <PageNumberContainer>
      {getPageNumbers().map((pageNumber) => (
        <PageButton
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
          isActive={pageNumber === page}
        >
          {pageNumber}
        </PageButton>
      ))}
    </PageNumberContainer>
  );
};

export default PageNumber;
