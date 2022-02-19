import React, { useState, useEffect, useReducer, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Navbar from '../components/navbar/Navbar.jsx';
import Sidebar from '../components/sidebar/Sidebar.jsx';
import PatientList from '../components/table/PatientList.jsx';

const INITIAL_STATE = {
  page: 1,
  length: 10,
  order_column: null, // person_id, gender, birth, race, ethnicity, death
  order_desc: false,
  gender: null,
  race: null,
  ethnicity: null,
  age_min: null,
  age_max: null,
  death: null,
};

const reducer = (state, action) => ({ ...state, ...action.payload });
const orderColumns = ['--', 'person_id', 'gender', 'birth', 'race', 'ethnicity', 'death'];

const App = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [isDark, setIsDark] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [patientData, setPatientData] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [raceList, setRaceList] = useState([]);
  const [ethnicityList, setEthnicityList] = useState([]);

  const handleStateChange = useCallback((k) => (v) => dispatch({ payload: { [k]: v } }), []);
  const setLength = (length) =>
    dispatch({
      payload: {
        page: 1,
        length,
      },
    });

  useEffect(() => {
    const fetchRaceList = async () => {
      const { data } = await axios.get('/race/list');
      setRaceList(data.raceList);
    };

    const fetchEthnicityList = async () => {
      const { data } = await axios.get('/ethnicity/list');
      setEthnicityList(data.ethnicityList);
    };

    try {
      setIsFetching(true);
      fetchRaceList();
      fetchEthnicityList();
    } catch (err) {
      alert('인종, 민족 데이터를 가져오는데 실패했습니다.');
    } finally {
      setIsFetching(false);
    }
  }, []);

  useEffect(() => {
    const fetchPatientList = async () => {
      const {
        data: { patient },
      } = await axios.get('/patient/list', {
        params: { ...state },
      });
      setPatientData(patient.list);
      setTotalRows(patient.totalLength);
    };

    try {
      setIsFetching(true);
      fetchPatientList();
    } catch (err) {
      alert('환자 데이터를 가져오는데 실패했습니다.');
    } finally {
      setIsFetching(false);
    }
  }, [state]);

  return (
    <>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Container>
        <Sidebar />
        <Content>
          <Sort>
            <ResetButton onClick={() => dispatch({ payload: { ...INITIAL_STATE } })}>Reset</ResetButton>
            <select
              onChange={({ target }) => dispatch({ payload: { order_column: target.value, page: 1 } })}
              value={state.order_column || '--'}
            >
              {orderColumns.map((column, idx) => (
                <option key={idx} value={column}>
                  {column}
                </option>
              ))}
            </select>
            <select
              onChange={({ target }) => dispatch({ payload: { order_desc: target.value === 'DESC', page: 1 } })}
              value={state.order_desc ? 'DESC' : 'ASC'}
            >
              {['ASC', 'DESC'].map((dir, idx) => (
                <option key={idx} value={dir}>
                  {dir}
                </option>
              ))}
            </select>
          </Sort>
          <PatientList
            rows={patientData}
            totalRows={totalRows}
            {...state}
            setPage={handleStateChange('page')}
            setLength={setLength}
            raceList={raceList}
            ethnicityList={ethnicityList}
            dispatch={dispatch}
          />
        </Content>
      </Container>
    </>
  );
};

export default App;

const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  width: 60vw;
  margin: 50px auto 0;
  height: 80vh;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 10px 2px rgba(61, 93, 128, 0.4);
  box-shadow: 0px 0px 10px 2px rgba(61, 93, 128, 0.4);
  position: relative;
`;

const ResetButton = styled.button`
  background: none;
  border: none;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;

const Sort = styled.div`
  position: absolute;
  top: -30px;
  right: 0;
  height: 30px;
  & > select {
    margin-left: 15px;
    height: 20px;
    &:hover {
      cursor: pointer;
    }
  }
`;
