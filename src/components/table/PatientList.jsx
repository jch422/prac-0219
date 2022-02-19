import React from 'react';
import styled from 'styled-components';

import PatientItem from './PatientItem.jsx';
import Pagination from './Pagination.jsx';
import Select from './Select.jsx';

const PatientList = (props) => {
  const { rows, totalRows, page, setPage, length, setLength, raceList, ethnicityList } = props;

  return (
    <Wrapper>
      <Head>
        <PersonID>ID</PersonID>
        <Select flex={1} {...props} text="Gender" options={['M', 'F']} />
        <BirthDate>Birth date</BirthDate>
        <Age>Age</Age>
        <Select flex={2} {...props} text="Race" options={raceList} />
        <Select flex={2} {...props} text="Ethnicity" options={ethnicityList} />
        <Select flex={1} {...props} text="Death" options={['O', 'X']} />
      </Head>
      <Body>
        {rows.map((rowData, idx) => (
          <PatientItem key={idx} data={rowData} />
        ))}
      </Body>
      <Pagination
        page={page}
        setPage={setPage}
        length={length}
        setLength={setLength}
        totalRows={totalRows}
        totalPages={Math.ceil(totalRows / length)}
      />
    </Wrapper>
  );
};

export default PatientList;

const Wrapper = styled.div`
  font-size: 20px;
`;

const Head = styled.div`
  display: flex;
  & > * {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid gray;
  }
`;

const PersonID = styled.div`
  flex: 2;
`;

const BirthDate = styled.div`
  flex: 3;
`;

const Age = styled.div`
  flex: 1;
`;

const Body = styled.div`
  height: calc(80vh - 62px - 50px);
  overflow-y: scroll;
`;
