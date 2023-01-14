import './App.css';
import dummy_data from './assets/dummy_data.json';

import React from 'react';

function convertDummyDataToDummyData2() {
  let dummy_data_3 = {};
  dummy_data.map((entity) => {
    entity.data.map((entityData) => {
      if (!dummy_data_3[entityData.time]) {
        dummy_data_3[entityData.time] = {};
      }
      dummy_data_3[entityData.time][entity.name] = entityData.value;
    });
  });
  console.log(dummy_data_3);
  console.log(dummy_data_1);
  // console.log(dummy_data_2);
  // timeValues[0]
}

convertDummyDataToDummyData2();

const App = () => {
  // console.log(dummy_data);
  return (
    <table>
      <thead>
        <tr>
          <th>Parameter</th>
          {/* <th>2022-01-01</th>
          <th>2022-01-02</th>
          <th>2022-01-03</th>
          <th>2022-01-04</th>
          <th>2022-01-05</th> */}
          {dummy_data[0].data.map((entityData) => (
            <th>{entityData.time}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dummy_data.map((entity) => {
          return (
            <tr>
              <th>{entity.name}</th>
              {entity.data.map((entityData) => {
                return <th>{entityData.value}</th>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default App;
