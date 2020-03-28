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





function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Navigation />
          <Switch>
            <Route path='/' component={DailyStatus} exact></Route>
            <Route path='/tableau' component={Turn}></Route>
            <Route path='/chartjs' component={D3BarChart3}></Route>
            <Route path='/bedmap' component={TableauChart}></Route>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
