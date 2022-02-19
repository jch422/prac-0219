import React from 'react';
import styled from 'styled-components';

const PatientItem = ({ data }) => {
  return (
    <Wrapper>
      <PersonID>{data.personID}</PersonID>
      <Gender>{data.gender}</Gender>
      <BirthDateTime>{data.birthDatetime.split(' ')[0]}</BirthDateTime>
      <Age>{data.age}</Age>
      <Race>{data.race}</Race>
      <Ethnicity>{data.ethnicity}</Ethnicity>
      <IsDeath>{data.isDeath ? 'O' : 'X'}</IsDeath>
    </Wrapper>
  );
};

export default PatientItem;

const Wrapper = styled.div`
  height: 55px;
  display: flex;
  align-items: center;
  & > * {
    padding: 10px 0;
    text-align: center;
  }

  &:nth-child(odd) {
    background: #f3f5f6;
  }
  &:hover {
    background: #d5e3e1;
    cursor: pointer;
  }
`;

const PersonID = styled.div`
  flex: 2;
`;

const Gender = styled.div`
  flex: 1;
`;

const BirthDateTime = styled.div`
  flex: 3;
`;

const Age = styled.div`
  flex: 1;
`;

const Race = styled.div`
  flex: 2;
`;

const Ethnicity = styled.div`
  flex: 2;
`;

const IsDeath = styled.div`
  flex: 1;
`;
