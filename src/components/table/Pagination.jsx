import React from 'react';
import styled from 'styled-components';

const Pagination = ({ page, setPage, length, setLength, totalRows, totalPages }) => {
  const displayNumArr = [5, 10, 20, 30, 40, 50, 100];

  const handlePageSelect = ({ target }) => setPage(Number(target.value));
  const handleLengthSelect = ({ target }) => setLength(Number(target.value));

  return (
    <Wrapper>
      <First disabled={page === 1} onClick={() => setPage(1)}>
        First
      </First>
      <Previous disabled={page === 1} onClick={() => setPage(page - 1)}>
        Previous
      </Previous>
      <TotalCount>total: {totalRows}</TotalCount>
      <PageSelectDiv>
        page &nbsp;
        <PageSelect onChange={handlePageSelect} value={page}>
          {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNum, idx) => (
            <option key={idx} value={pageNum}>
              {pageNum}
            </option>
          ))}
        </PageSelect>
        &nbsp;of {totalPages}
      </PageSelectDiv>

      <LengthSelect onChange={handleLengthSelect} value={length}>
        {displayNumArr.map((num, idx) => (
          <option key={idx} value={num}>
            rows {num}
          </option>
        ))}
      </LengthSelect>
      <Next disabled={page === totalPages} onClick={() => setPage(page + 1)}>
        Next
      </Next>
      <Last disabled={page === totalPages} onClick={() => setPage(totalPages)}>
        Last
      </Last>
    </Wrapper>
  );
};

export default Pagination;

const Wrapper = styled.div`
  height: 50px;
  border-top: 1px solid #94a7a4;
  color: #2b363c;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  & > div,
  button {
    margin: 0 10px;
  }
  & > button {
    outline: none;
    padding: 7px 12px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 3px;
    color: #2b363c;
  }
`;

const First = styled.button``;

const Previous = styled.button``;

const TotalCount = styled.div``;

const PageSelectDiv = styled.div`
  align-self: stretch;
  & > select {
    font-size: 16px;
  }
`;

const PageSelect = styled.select`
  height: 100%;
  border: none;
  background: none;
`;

const LengthSelect = styled.select`
  align-self: stretch;
  border: none;
  background: none;
  font-size: 16px;
`;

const Next = styled.button``;

const Last = styled.button``;
