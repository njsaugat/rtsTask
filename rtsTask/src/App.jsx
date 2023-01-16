import './App.css';
import dummy_data from './assets/dummy_data.json';

import React from 'react';
import Page from './Page';

function convertDummyDataToDummyData2() {
  let dummy_data_2 = {};
  dummy_data.map((entity) => {
    entity.data.map((entityData) => {
      if (!dummy_data_2[entityData.time]) {
        dummy_data_2[entityData.time] = {};
      }
      dummy_data_2[entityData.time][entity.name] = entityData.value;
    });
  });
  return dummy_data_2;
}

const RenderDummyData2 = ({ title, dummy_data_2 }) => {
  const timestamps = Object.keys(dummy_data_2);
  const entitites = Object.keys(dummy_data_2[timestamps[0]]);
  return (
    <table>
      <thead>
        <tr>
          <th>{title}</th>
          {entitites.map((entity) => {
            return <th>{entity}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {Object.entries(dummy_data_2).map((entity) => {
          return (
            <tr>
              <th>{entity[0]}</th>
              {Object.entries(entity[1]).map((entityValue) => (
                <th>{entityValue[1]}</th>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const RenderDummyData = ({ title }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>{title}</th>
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
const App = () => {
  let dummy_data_2 = convertDummyDataToDummyData2();
  return (
    <>
      <RenderDummyData title={'Parameter'} />
      <br />
      <RenderDummyData2 title={'Time'} dummy_data_2={dummy_data_2} />
      <Page />
    </>
  );
};

export default App;
