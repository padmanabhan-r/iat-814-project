import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,ReferenceLine
} from 'recharts';

import data from "../data/csvjson_bedcap2.json";
import { scaleTime } from 'd3-scale'


//const data = data;

const gradientOffset = () => {
  const dataMax = data.map(i => i.ActualCapacity);
 // const dataMin = Math.min(...data.map(i => i.ActualCapacity));
// data.forEach(function(d){
//   if (d.ActualCapacity <= 10) {
//     return 0;
//   }
//   if (d.ActualCapacity > 10) {
//     return 1;
//   }
// })

if (dataMax <= 10) {
    return 0;
  }
  if (dataMax > 10) {
    return 1;
  }

 // return dataMax / (dataMax - dataMin);
};

  //return dataMax / (dataMax - dataMin);

const off = gradientOffset();

class CapLine extends PureComponent {
  //static jsfiddleUrl = 'https://jsfiddle.net/alidingling/64v6ocdx/';

  render() {
    return (
      <AreaChart
        width={800}
        height={400}
        data={data}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        
         <ReferenceLine x="Page C" stroke="red" label="Max PV PAGE"/>
         <ReferenceLine y={10} label="Max" stroke="red"/>
        <XAxis dataKey="date" name="date" interval={0} tick={{ fontSize:6 }}  tickLine={{ transform: 'translate(0, -6)' }}/>
        <YAxis  interval="preserveStart"  domain ={[0,16]} range={[0,16]} />
        <Tooltip />
        <defs>
          <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset={1} stopColor="green" stopOpacity={1} />
            <stop offset={0} stopColor="red" stopOpacity={1} />
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey="AdmCount" stroke="#000" fill="url(#splitColor)" />
      </AreaChart>
    );
  }
}
export default CapLine;