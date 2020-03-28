import React, { PureComponent } from 'react';
import {
    ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip,
    Legend,
} from 'recharts';
import data from '../data/turnar.js'

const [ unit1E, unit1N, unit1S, unit1W, unitBP, unitSCU ] = data;

const parseDomain = () => [
    0,
    Math.max(
        Math.max.apply(null, unit1E.map(entry => entry.value)),
        Math.max.apply(null, unit1S.map(entry => entry.value)),
        Math.max.apply(null, unit1W.map(entry => entry.value)),
        Math.max.apply(null, unit1N.map(entry => entry.value)),
        Math.max.apply(null, unitBP.map(entry => entry.value)),
        Math.max.apply(null, unitSCU.map(entry => entry.value))
    ),
];

class Turn extends PureComponent {

    renderTooltip = (props) => {
        const { active, payload } = props;

        if (active && payload && payload.length) {
            const data = payload[0] && payload[0].payload;

            return (
                <div style={{
                    backgroundColor: '#fff', border: '1px solid #999', margin: 0, padding: 10,
                }}
                >
                    <p>{data.hour}</p>
                    <p>
                        <span>Turnaround Time(mins): {data.value}</span>
                        
                    </p>
                </div>
            );
        }

        return null;
    }

    render() {
        const domain = parseDomain();
        const range = [0, 1000];

        return (
            <div>
                <ScatterChart
                    width={900}
                    height={80}
                    margin={{
                        top: 20, right: 0, bottom: 0, left: 0,
                    }}
                >
                    <XAxis type="category" dataKey="hour" name="hour" interval={0} tick={{ fontSize: 0 }} tickLine={{ transform: 'translate(0, -6)' }} />
                    <YAxis type="number" dataKey="index" height={10} width={80} tick={false} tickLine={false} axisLine={false} label={{ value: 'Unit 1E', position: 'insideRight' }} />
                    <ZAxis type="number" dataKey="value" domain={domain} range={range} />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
                    <Scatter data={unit1E} fill="red" shape="circle" line={{stroke: 'black', strokeWidth: 1}} />
                </ScatterChart>

                <ScatterChart
                    width={900}
                    height={80}
                    margin={{
                        top: 20, right: 0, bottom: 0, left: 0,
                    }}
                >
                    <XAxis type="category" dataKey="hour" name="hour" interval={0} tick={{ fontSize: 0 }} tickLine={{ transform: 'translate(0, -6)' }} />
                    <YAxis type="number" dataKey="index" height={10} width={80} tick={false} tickLine={false} axisLine={false} label={{ value: 'Unit 1S', position: 'insideRight' }} />
                    <ZAxis type="number" dataKey="value" domain={domain} range={range} />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
                    <Scatter data={unit1S} fill="red" shape="circle" line={{stroke: 'black', strokeWidth: 1}} />
                </ScatterChart>

                <ScatterChart
                    width={900}
                    height={80}
                    margin={{
                        top: 20, right: 0, bottom: 0, left: 0,
                    }}
                >
                    <XAxis type="category" dataKey="hour" name="hour" interval={0} tick={{ fontSize: 0 }} tickLine={{ transform: 'translate(0, -6)' }} />
                    <YAxis type="number" dataKey="index" height={10} width={80} tick={false} tickLine={false} axisLine={false} label={{ value: 'Unit 1W', position: 'insideRight' }} />
                    <ZAxis type="number" dataKey="value" domain={domain} range={range} />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
                    <Scatter data={unit1W} fill="red" shape="circle" line={{stroke: 'black', strokeWidth: 1}} />
                </ScatterChart>

                <ScatterChart
                    width={900}
                    height={80}
                    margin={{
                        top: 20, right: 0, bottom: 0, left: 0,
                    }}
                >
                    <XAxis type="category" dataKey="hour" name="hour" interval={0} tick={{ fontSize: 0 }} tickLine={{ transform: 'translate(0, -6)' }} />
                    <YAxis type="number" dataKey="index" height={10} width={80} tick={false} tickLine={false} axisLine={false} label={{ value: 'Unit 1N', position: 'insideRight' }} />
                    <ZAxis type="number" dataKey="value" domain={domain} range={range} />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
                    <Scatter data={unit1N} fill="red" shape="circle" line={{stroke: 'black', strokeWidth: 1}} />
                </ScatterChart>

                <ScatterChart
                    width={900}
                    height={80}
                    margin={{
                        top: 20, right: 0, bottom: 0, left: 0,
                    }}
                >
                    <XAxis type="category" dataKey="hour" name="hour" interval={0} tick={{ fontSize: 0 }} tickLine={{ transform: 'translate(0, -6)' }} />
                    <YAxis type="number" dataKey="index" height={10} width={80} tick={false} tickLine={false} axisLine={false} label={{ value: 'Unit BP', position: 'insideRight' }} />
                    <ZAxis type="number" dataKey="value" domain={domain} range={range} />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
                    <Scatter data={unitBP} fill="red" shape="circle" line={{stroke: 'black', strokeWidth: 1}} />
                </ScatterChart>

                <ScatterChart
                    width={900}
                    height={80}
                    margin={{
                        top: 20, right: 0, bottom: 0, left: 0,
                    }}
                >
                    <XAxis type="category" dataKey="hour" name="hour" interval={0} tick={{ fontSize: 11 }} tickLine={{ transform: 'translate(0, -6)' }} />
                    <YAxis type="number" dataKey="index" height={10} width={80} tick={false} tickLine={false} axisLine={false} label={{ value: 'Unit SCU', position: 'insideRight' }} />
                    <ZAxis type="number" dataKey="value" domain={domain} range={range} />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
                    <Scatter data={unitSCU} fill="red" shape="circle" line={{stroke: 'black', strokeWidth: 1}}/>
                </ScatterChart>
            </div>
        );
    }
}

export default Turn;
