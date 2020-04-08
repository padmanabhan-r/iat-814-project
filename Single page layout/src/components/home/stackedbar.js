import React, {PureComponent} from 'react';

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

// import data from '../../data/bedstatusdata';

export default class StackedBarR extends PureComponent {
  render() {
    const {data} = this.props;
    return (
      <div className="fadeInUp raisedbox" style={{animationDelay: '1.3s'}}>
        <BarChart
          width={440}
          height={180}
          data={data}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Unit" tick={{fontSize: 12, fontFamily: 'archia'}} />
          <YAxis
            interval="preserveStartEnd"
            tick={{fontSize: 12, fontFamily: 'archia'}}
            label={{
              value: 'Number of Beds',
              angle: -90,
              position: 'Left',
              fontFamily: 'archia',
              fontSize: 12,
              fontColo: "black"
            }}
          />
          <Tooltip wrapperStyle={{fontFamily: 'archia'}} />
          <Legend
            wrapperStyle={{fontSize: '12px', fontFamily: 'archia'}}
            align="center"
          />
          <Bar dataKey="Occupied" stackId="a" fill="#9ecae1" />
          <Bar dataKey="Vacant" stackId="a" fill="#fee0d2" />
        </BarChart>
      </div>
    );
  }
}
