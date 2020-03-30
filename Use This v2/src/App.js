import React from 'react';
import './App.css';
import Header from "./components/Header";
import Chart1 from "./components/Chart1";
import TableauChart from "./components/TableauChart";
import RechartLine from "./components/RechartLine";
import DBrushBar from "./components/DBrushBar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import DailyStatus from "./components/DailyStatus";
import D3BarChart3 from "./components/D3BarChart3";
import ZommArea from "./components/ZommArea";
import TreeM from "./components/TreeM";
import Turn from "./components/Turn";
import CustBar from "./components/CustBar";
import TurnLine from "./components/TurnLine";
import TurnBarBrush from "./components/TurnBarBrush";
import Temp from "./components/Temp";
import TurnAroundComp from "./components/TurnAroundComp";
import D3BarChart2 from "./components/D3BarChart2";
import SummaryComp from "./components/SummaryComp";
import TreemapChart from "./components/TreemapChart";
import LayoutComp from "./components/LayoutComp";


function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Navigation />
          <Switch>
            <Route path='/' component={DailyStatus} exact></Route>
            <Route path='/turnaround' component={TurnAroundComp}></Route>
            <Route path='/summary' component={SummaryComp} exact></Route>
            <Route path='/bedmap' component={Temp}></Route>
            <Route path='/potentialDT' component={LayoutComp}></Route>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
