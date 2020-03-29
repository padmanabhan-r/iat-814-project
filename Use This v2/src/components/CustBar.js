import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label
} from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import data from '../data/turnaround_data';

const colors = scaleOrdinal(schemeCategory10).range();

const median = arr => {
    const mid = Math.floor(arr.length / 2),
      nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  };

const getAggdata = (data) => {
    let result = [];
    data.reduce(function (res, value) {
        if (!res[value.Unit]) {
            // res[value.Unit] = { Unit: value.Unit, TurnaroundTimeHours: 0, Count: 0, Avg: 0 };
            res[value.Unit] = { Unit: value.Unit, TurnaroundTimeHours: 0, AllVal: [], Median: 0 };
            result.push(res[value.Unit])
        }
        res[value.Unit].TurnaroundTimeHours += value.TurnaroundTimeHours;
        // res[value.Unit].Count += 1;
        // res[value.Unit].Avg = (res[value.Unit].TurnaroundTimeHours / res[value.Unit].Count).toFixed(2);
        res[value.Unit].AllVal.push(value.TurnaroundTimeHours);
        res[value.Unit].Median = median(res[value.Unit].AllVal).toFixed(2);
        return res;
    }, {});
    return result;
}

const getPath = (x, y, width, height) => `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + 40 * width / 3},${y + height} ${x + width}, ${y + height}
          Z`;

const TriangleBar = (props) => {
    const {
        fill, x, y, width, height,
    } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

TriangleBar.propTypes = {
    fill: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
};

class CustBar extends PureComponent {

    constructor(props) {
        super(props)
        this.state = data
    }

    render() {
        return (
            <BarChart
                width={500}
                height={500}
                data={getAggdata(this.state)}
                margin={{
                    top: 20, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Unit">
                <Label value="Unit" offset={1} position="insideBottom" />
                </XAxis>
                <YAxis label={{ value: 'Turnaround Time in Hours', angle: -90, position: 'Left' }}/>
                <Bar dataKey="Median" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {
                        data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))
                    }
                </Bar>
            </BarChart>
        );
    }
}

export default CustBar;