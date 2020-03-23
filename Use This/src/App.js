import React from 'react';
import './App.css';
import Header from "./components/Header";
import Chart1 from "./components/Chart1";
import TableauChart from "./components/TableauChart";
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
  );
}

export default App;
