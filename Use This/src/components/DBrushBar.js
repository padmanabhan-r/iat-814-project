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
        <Select options={ unitNames } />
        <BarChart
          width={500}
          height={300}
          data={getAggdata(this.state, selectedOption)}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
          <ReferenceLine y={0} stroke="#000" />
          <Brush dataKey="Date" height={30} stroke="#8884d8" />
          <Bar dataKey="NumberOfPatients" fill="#8884d8" />
        </BarChart>
      </div>
    );
  }
}

export default DBrushBar;