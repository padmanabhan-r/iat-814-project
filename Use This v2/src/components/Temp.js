import React, { PureComponent } from 'react';
import {
    BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label
} from 'recharts';
import data from '../data/turnaround_data';

const getAggdata = (data) => {
    let result = [];
    data.reduce(function (res, value) {
        if (!res[value.Date]) {
            res[value.Date] = { Date: value.Date, TurnaroundTimeHours: 0, Count: 0, Avg: 0 };
            result.push(res[value.Date])
        }
        res[value.Date].TurnaroundTimeHours += value.TurnaroundTimeHours;
        res[value.Date].Count += 1;
        res[value.Date].Avg = (res[value.Date].TurnaroundTimeHours / res[value.Date].Count).toFixed(2);
        return res;
    }, {});
    return result;
}

class Temp extends PureComponent {

    constructor(props) {
        super(props)
        this.state = data
    }

    renderTooltip = (props) => {
        const { active, payload } = props;

        if (active && payload && payload.length) {
            const data = payload[0] && payload[0].payload;

            return (
                <div style={{
                    backgroundColor: '#fff', border: '1px solid #999', margin: 0, padding: 10,
                }}
                >
                    <p>Turnaround Time for {data.Date} : {data.Avg} hrs</p>
                </div>
            );
        }

        return null;
    }

    render() {
        return (
            <div>
                <h4>Unit 1N</h4>
                <BarChart
                    width={600}
                    height={150}
                    data={getAggdata(this.state.filter(d => d.Unit === '1N'))}
                    // syncId="anyId"
                    margin={{
                        top: 0, right: 30, left: 20, bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Date">
                        {/* <Label value="Date" offset={0} position="insideBottom" /> */}
                    </XAxis >
                    <YAxis label={{ value: 'TAT(hrs)', angle: -90, position: 'Left' }} allowDataOverflow='False' domain={[0, 48]} />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
                    {/* <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} /> */}
                    <ReferenceLine y={0} stroke="#000" />
                    <Brush dataKey="Date" height={30} stroke="#8884d8" />
                    <Bar dataKey="Avg" fill="#8884d8" />
                </BarChart>
                <p>Unit 1E</p>
                <BarChart
                    width={600}
                    height={150}
                    data={getAggdata(this.state.filter(d => d.Unit === '1E'))}
                    // syncId="anyId"
                    margin={{
                        top: 0, right: 30, left: 20, bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Date">
                        {/* <Label value="Date" offset={0} position="insideBottom" /> */}
                    </XAxis >
                    <YAxis label={{ value: 'Turnaround Time in Hours', angle: -90, position: 'Left' }} allowDataOverflow='False' domain={[0, 48]} />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
                    {/* <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} /> */}
                    <ReferenceLine y={0} stroke="#000" />
                    <Brush dataKey="Date" height={30} stroke="#8884d8" />
                    <Bar dataKey="Avg" fill="#8884d8" />
                </BarChart>
            </div>
        );
    }
};


export default Temp;