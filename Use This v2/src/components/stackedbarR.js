import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    Unit: '1N', Occupied: 12, Vacant: 3, Total: 15,
  },
  {
    Unit: '1S', Occupied: 8, Vacant: 2, Total: 10,
  },
  {
    Unit: 'BP', Occupied: 4, Vacant: 1, Total: 5,
  },
  {
    Unit: 'SCU', Occupied: 2, Vacant: 2, Total: 4,
  },
  {
    Unit: '1E', Occupied: 3, Vacant: 2, Total: 4,
  },
  {
    Unit: '1W', Occupied: 8, Vacant: 2, Total:10,
  }
 
];

export default class StackedBarR extends PureComponent {
 // static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';

  render() {
    return (
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Unit" />
        <YAxis interval="preserveStartEnd"/>
        <Tooltip />
        <Legend />
        <Bar dataKey="Occupied" stackId="a" fill="#fec44f" />
        <Bar dataKey="Vacant" stackId="a" fill="#82ca9d" />
      </BarChart>
    );
  }
}
