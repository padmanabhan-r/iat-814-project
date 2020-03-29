import React from 'react';
import './App.css';
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Chart1 from "./components/Chart1";
import TableauChart from "./components/TableauChart";
import D3Chart1 from "./components/D3Chart1";
import {csv,csvParse,json} from 'd3';

function App() {
  return (
    <div className="App">
       <Header />
       <Dashboard /> 
  {/* <Chart1 /> */ }
   
      {/* <TableauChart />*/}
    </div>
  );
}

export default App;
