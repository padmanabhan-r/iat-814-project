import React from 'react';
import './App.css';
import Header from "./components/Header";
import Chart1 from "./components/Chart1";
import TableauChart from "./components/TableauChart";
<<<<<<< HEAD
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
=======
import RechartLine from "./components/RechartLine";
import DBrushBar from "./components/DBrushBar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';



function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Navigation />
          <Switch>
            <Route path='/' component={DBrushBar} exact></Route>
            <Route path='/tableau' component={TableauChart}></Route>
            <Route path='/chartjs' component={Chart1}></Route>
          </Switch>
        </div>
      </BrowserRouter>
>>>>>>> f15bba5f3b83242305e40c2ca95e147b21db7c62
  );
}

export default App;
