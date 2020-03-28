import React, { PureComponent } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import data from '../data/AdmissionLog';

var result = [];
data.reduce(function (res, value) {
    if (!res[value.AdmitUnit]) {
        res[value.AdmitUnit] = { AdmitUnit: value.AdmitUnit, NumberOfPatients: 0 };
        result.push(res[value.AdmitUnit])
    }
    res[value.AdmitUnit].NumberOfPatients += value.NumberOfPatients;
    return res;
}, {});

console.log(result)

class RechartLine extends PureComponent {

    render() {
        console.log(data);
        return (
            <div>
                <BarChart
                    width={600}
                    height={300}
                    data={result}
                    margin={{
                        top: 20, right: 30, left: 50, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="AdmitUnit" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="NumberOfPatients" fill="#2E3B55" />
                </BarChart>
            </div>
        );
    }
}
export default RechartLine;