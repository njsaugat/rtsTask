import './App.css';
import dummy_data from './assets/dummy_data.json';

import React from 'react';

function convertDummyDataToDummyData2() {
  const timeValues = dummy_data[0].data.map((entityData) => entityData.time);
  const entityNames = dummy_data.map((entity) => entity.name);
  console.log(timeValues);
  const dummy_data_2 = {
    [timeValues[0]]: {
      // dummy_data[0].name:
      [entityNames[0]]: dummy_data[0].data[0].value,
      [entityNames[1]]: dummy_data[1].data[0].value,
      [entityNames[2]]: dummy_data[2].data[0].value,
      [entityNames[3]]: dummy_data[3].data[0].value,
    },
  };

  const dummy_data_1 = timeValues.map((timeValue, timeKeyIndex) => {
    return {
      [timeValue]: entityNames.map((nameValue, valueIndex) => {
        return {
          [nameValue]: dummy_data[valueIndex].data[timeKeyIndex].value,
        };
      }),
    };
  });
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
