import React, { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {

  const [cdata, setCData] = useState([]);

  const getCovidData = async () => {
    // const res = await fetch('https://data.covid19india.org/v4/min/data.min.json');
    const res = await fetch('https://data.covid19india.org/data.json');
    const actualdata = await res.json();
    console.log(actualdata.statewise);
    setCData(actualdata.statewise);
  };

  useEffect( () => {
    getCovidData();
  }, []);

  return(
    <>
      <div className='container-fluid mt-5'>
        <div className='main-heading text-center'>
          <h1 className='mb-5'> <span className='font-weight-bold'> INDIA </span> Covid 19 Tracker </h1>
        </div>
        <div className='table-responsive'>
          <table className='table table-hover'>
            <thead className='thead-dark'>
              <tr>
                <th>State</th>
                <th>Confirmed</th>
                <th>Recovered</th>
                <th>Deaths</th>
                <th>Delta Confirmed</th>
                <th>Delta Recovered</th>
                <th>Delta Deaths</th>
                <th>Active</th>
                <th>Updated</th>
              </tr>
            </thead>
            <tbody>
              {
                cdata.map( (currElem, ind) => {
                  return(
                    <tr key={ind}>
                      <td>{currElem.state}</td>
                      <td>{currElem.confirmed}</td>
                      <td>{currElem.recovered}</td>
                      <td>{currElem.deaths}</td>
                      <td>{currElem.deltaconfirmed}</td>
                      <td>{currElem.deltarecovered}</td>
                      <td>{currElem.deltadeaths}</td>
                      <td>{currElem.active}</td>
                      <td>{currElem.lastupdatedtime}</td>
                    </tr>
                  );
                } )
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  ); 
}

export default App;