import React, {Component} from 'react';
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
import TempComp from "./components/TempComp";
import data from "./data/data";
import { Layout } from 'antd';

const { Sider, Content, Footer } = Layout;

// export default class Dashboard extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             selectedUser: data[0],
//             greaterThenAge: 0,
//             includedGender: ['Male', 'Female','Unknown'],
//         }
//     }

//     changeSelectUser = value => {
//         this.setState({
//             selectedUser: value
//         })
//     }

//     changeGreaterThenAge = value => {
//         this.setState({
//             greaterThenAge: value
//         })
//     }

//     changeIncludedGender = value => {
//         this.setState({
//             includedGender: value
//         })
//     }

//     render() {
//         const {selectedUser, greaterThenAge, includedGender} = this.state;
//         const filteredData = data.filter(user=>includedGender.indexOf(user.gender)!==-1)
//                                  .filter(user=>user.age>greaterThenAge);
//         return (
//             <div>
//                 <Layout style={{ height: 920 }}>
//                     <Sider width={300} style={{backgroundColor:'#eee'}}>
//                         <Content style={{ height: 200 }}>
//                             <Chart1 user={selectedUser}/>
//                         </Content>
//                         <Content style={{ height: 300 }}>
//                             <stackedbarR data={filteredData}/>
//                         </Content>
//                         <Content style={{ height: 400 }}>
//                             <D3BarChart2
//                                 changeGreaterThenAge={this.changeGreaterThenAge}
//                                 changeIncludedGender={this.changeIncludedGender}
//                             />
//                         </Content>
//                     </Sider>
//                     </Layout>
//                         {/* <Content style={{ height: 300 }}>
//                             <View4 user={selectedUser}/>
//                         </Content>
//                         <Layout style={{ height: 600 }}>
//                             <Content>
//                                 <View5 data={filteredData}/>
//                             </Content>
//                             <Sider width={300} style={{backgroundColor:'#eee'}}>
//                                 <View6 data={filteredData} changeSelectUser={this.changeSelectUser}/>
//                             </Sider>
//                         </Layout>
//                     </Layout>
//                 </Layout>
//                 <Layout> */}
//                     {/* <Footer style={{ height: 20 }}>
//                         <div style={{marginTop: -10}}>
//                             Source Code <a href='https://github.com/sdq/react-d3-dashboard'>https://github.com/sdq/react-d3-dashboard</a>;
//                             Author <a href='https://sdq.ai'>sdq</a>;
//                         </div>
//                     </Footer>
//                 </Layout> */}
//             </div>
//         )
//     }
// }



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
            <Route path='/bedmap' component={TempComp}></Route>
            <Route path='/potentialDT' component={LayoutComp}></Route>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
