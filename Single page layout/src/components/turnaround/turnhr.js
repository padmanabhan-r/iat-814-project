import React, {PureComponent} from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  Legend,
} from 'recharts';
import data from '../../data/turnar';

const [unit1N, unit1S, unit1W, unitBP, unitSCU] = data;

const parseDomain = () => [
  0,
  Math.max(
    Math.max.apply(
      null,
      unit1S.map((entry) => entry.value)
    ),
    Math.max.apply(
      null,
      unit1W.map((entry) => entry.value)
    ),
    Math.max.apply(
      null,
      unit1N.map((entry) => entry.value)
    ),
    Math.max.apply(
      null,
      unitBP.map((entry) => entry.value)
    ),
    Math.max.apply(
      null,
      unitSCU.map((entry) => entry.value)
    )
  ),
];

class TurnHr extends PureComponent {
  renderTooltip = (props) => {
    const {active, payload} = props;

    if (active && payload && payload.length) {
      const data = payload[0] && payload[0].payload;

      return (
        <div
          style={{
            backgroundColor: '#fff',
            border: '1px solid #999',
            margin: 0,
            padding: 10,
          }}
        >
          <p>
            <span>Turnaround Time: {(data.value / 60).toFixed(2)} hrs</span>
          </p>
        </div>
      );
    }

    return null;
  };

  render() {
    const domain = parseDomain();
    const range = [0, 800];

    return (
      <div className="fadeInUp raisedbox" style={{animationDelay: '1.3s'}}>
        <ScatterChart
          width={750}
          height={90}
          margin={{
            top: 20,
            right: 10,
            bottom: 10,
            left: 0,
          }}
        >
          <XAxis
            type="category"
            dataKey="hour"
            name="hour"
            interval={0}
            tick={{fontSize: 0}}
            tickLine={{transform: 'translate(0, -6)'}}
          />
          <YAxis
            type="number"
            dataKey="index"
            height={10}
            width={80}
            tick={false}
            tickLine={false}
            axisLine={false}
            label={{
              value: 'Unit 1S',
              position: 'insideRight',
              fontFamily: 'archia',
              fontSize: 12,
            }}
          />
          <ZAxis type="number" dataKey="value" domain={domain} range={range} />
          <Tooltip
            cursor={{strokeDasharray: '3 3'}}
            wrapperStyle={{zIndex: 100, fontSize: '12px', fontFamily: 'archia'}}
            content={this.renderTooltip}
          />
          <Scatter
            data={unit1S}
            fill="#dc3545"
            shape="circle"
            line={{stroke: 'black', strokeWidth: 1}}
          />
        </ScatterChart>

        <ScatterChart
          width={750}
          height={90}
          margin={{
            top: 20,
            right: 10,
            bottom: 10,
            left: 0,
          }}
        >
          <XAxis
            type="category"
            dataKey="hour"
            name="hour"
            interval={0}
            tick={{fontSize: 0}}
            tickLine={{transform: 'translate(0, -6)'}}
          />
          <YAxis
            type="number"
            dataKey="index"
            height={10}
            width={80}
            tick={false}
            tickLine={false}
            axisLine={false}
            label={{
              value: 'Unit 1W',
              position: 'insideRight',
              fontFamily: 'archia',
              fontSize: 12,
            }}
          />
          <ZAxis type="number" dataKey="value" domain={domain} range={range} />
          <Tooltip
            cursor={{strokeDasharray: '3 3'}}
            wrapperStyle={{zIndex: 100, fontSize: '12px', fontFamily: 'archia'}}
            content={this.renderTooltip}
          />
          <Scatter
            data={null}
            fill="#dc3545"
            shape="circle"
            line={{stroke: 'black', strokeWidth: 1}}
          />
        </ScatterChart>

        <ScatterChart
          width={750}
          height={90}
          margin={{
            top: 20,
            right: 10,
            bottom: 10,
            left: 0,
          }}
        >
          <XAxis
            type="category"
            dataKey="hour"
            name="hour"
            interval={0}
            tick={{fontSize: 0}}
            tickLine={{transform: 'translate(0, -6)'}}
          />
          <YAxis
            type="number"
            dataKey="index"
            height={10}
            width={80}
            tick={false}
            tickLine={false}
            axisLine={false}
            label={{
              value: 'Unit 1N',
              position: 'insideRight',
              fontFamily: 'archia',
              fontSize: 12,
            }}
          />
          <ZAxis type="number" dataKey="value" domain={domain} range={range} />
          <Tooltip
            cursor={{strokeDasharray: '3 3'}}
            wrapperStyle={{zIndex: 100, fontSize: '12px', fontFamily: 'archia'}}
            content={this.renderTooltip}
          />
          <Scatter
            data={unit1N}
            fill="#dc3545"
            shape="circle"
            line={{stroke: 'black', strokeWidth: 1}}
          />
        </ScatterChart>

        <ScatterChart
          width={750}
          height={90}
          margin={{
            top: 20,
            right: 10,
            bottom: 10,
            left: 0,
          }}
        >
          <XAxis
            type="category"
            dataKey="hour"
            name="hour"
            interval={0}
            tick={{fontSize: 0}}
            tickLine={{transform: 'translate(0, -6)'}}
          />
          <YAxis
            type="number"
            dataKey="index"
            height={10}
            width={80}
            tick={false}
            tickLine={false}
            axisLine={false}
            label={{
              value: 'Unit BP',
              position: 'insideRight',
              fontFamily: 'archia',
              fontSize: 12,
            }}
          />
          <ZAxis type="number" dataKey="value" domain={domain} range={range} />
          <Tooltip
            cursor={{strokeDasharray: '3 3'}}
            wrapperStyle={{zIndex: 100, fontSize: '12px', fontFamily: 'archia'}}
            content={this.renderTooltip}
          />
          <Scatter
            data={unitBP}
            fill="#dc3545"
            shape="circle"
            line={{stroke: 'black', strokeWidth: 1}}
          />
        </ScatterChart>

        <ScatterChart
          width={750}
          height={90}
          margin={{
            top: 20,
            right: 10,
            bottom: 10,
            left: 0,
          }}
        >
          <XAxis
            type="category"
            dataKey="hour"
            name="hour"
            interval={0}
            tick={{fontSize: 10, fontFamily: 'archia'}}
            tickLine={{transform: 'translate(0, -6)'}}
          />
          <YAxis
            type="number"
            dataKey="index"
            height={10}
            width={80}
            tick={false}
            tickLine={false}
            axisLine={false}
            label={{
              value: 'Unit SCU',
              position: 'insideRight',
              fontFamily: 'archia',
              fontSize: 12,
            }}
          />
          <ZAxis type="number" dataKey="value" domain={domain} range={range} />
          <Tooltip
            cursor={{strokeDasharray: '3 3'}}
            wrapperStyle={{zIndex: 100, fontSize: '12px', fontFamily: 'archia'}}
            content={this.renderTooltip}
          />
          <Scatter
            data={unitSCU}
            fill="#dc3545"
            shape="circle"
            line={{stroke: 'black', strokeWidth: 1}}
          />
        </ScatterChart>
      </div>
    );
  }
}

export default TurnHr;
