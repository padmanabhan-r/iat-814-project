import React from 'react';
import './App.css';
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Chart1 from "./components/Chart1";
import TableauChart from "./components/TableauChart";
import TableauTest from "./components/TableauTest";
//import RechartLine from "./components/RechartLine";
import ZommArea from './components/ZommArea';
import D3BarChart3 from './components/D3BarChart3';

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      {/* <Chart1 /> */}
      <ZommArea />
      <D3BarChart3 />
      
     {/* <RechartLine /> */}
      {/* <TableauChart /> */}
    </div>
  );
}

export default App;
