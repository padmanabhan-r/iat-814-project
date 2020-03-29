import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import data from '../data/DischargeLog';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

const unitNames = [
  { label: "1N", value: "1N" },
  { label: "1S", value: "1S" },
  { label: "1W", value: "1W" }
];


const getAggdata = (data, unit) => {
  let result = [];
  data = data.filter(d => d.Unit === unit);
  data.reduce(function (res, value) {
    if (!res[value.Date]) {
      res[value.Date] = { Date: value.Date, NumberOfPatients: 0 };
      result.push(res[value.Date])
    }
    res[value.Date].NumberOfPatients += value.NumberOfPatients;
    return res;
  }, {});
  return result;
}

class DBrushBar extends PureComponent {

  constructor(props) {
    super(props)
    this.state = data
  }


  render() {
    let selectedOption = "1N";
    return (
      <div>
        {/* <Select options={ unitNames } /> */}
        <BarChart
          width={580}
          height={300}
          data={getAggdata(this.state, selectedOption)}
          
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date" stroke="black"/>
          <YAxis stroke="black" />
          <Tooltip />
          {/* <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} /> */}
          <ReferenceLine y={0} stroke="black" />
          <Brush dataKey="Date" height={30} stroke="black" />
          <Bar dataKey="NumberOfPatients" fill="orange" />
        </BarChart>
      </div>
    );
  }
}

export default DBrushBar;