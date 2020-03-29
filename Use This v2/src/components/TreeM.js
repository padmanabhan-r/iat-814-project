import React, { PureComponent } from 'react';
import { Treemap, Tooltip } from 'recharts';

const data = [
    {
        name: '1N',
        children: [
            { name: 'O', size: 10 },
            { name: 'TBC', size: 3 },
            { name: 'V', size: 1 },
        ],
    },
    {
        name: '1S',
        children: [
            { name: 'O', size: 1 },
            { name: 'TBC', size: 6 },
            { name: 'V', size: 2 },
        ],
    },
    {
        name: '1W',
        children: [
            { name: 'O', size: 2 },
            { name: 'TBC', size: 5 },
            { name: 'V', size: 3 },
        ],
    },
    {
        name: '1E',
        children: [
            { name: 'O', size: 3 },
            { name: 'TBC', size: 1 },
            { name: 'V', size: 0 },
        ],
    },
    {
        name: 'BP',
        children: [
            { name: 'O', size: 1 },
            { name: 'TBC', size: 3 },
            { name: 'V', size: 1 },
        ],
    },
    {
        name: 'SCU',
        children: [
            { name: 'O', size: 0 },
            { name: 'TBC', size: 0 },
            { name: 'V', size: 4 },
        ],
    },
];

console.log(data)

const COLORS = ['orange', 'red', 'green'];

class CustomizedContent extends PureComponent {
    render() {
        let {
            root, depth, x, y, width, height, index, payload, colors, rank, name,
        } = this.props;

        return (
            <g>
                <rect
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    style={{
                        fill: depth === 2 ? colors[Math.floor(index / root.children.length * 3)] : 'none',
                        stroke: 'white',
                        strokeWidth: 5 / (depth + 1e-10),
                        strokeOpacity: 2 / (depth + 1e-10),
                    }}
                />
                {/* {
                    depth === 1 ? (
                        <text
                            x={x + width / 2}
                            y={y + height / 2 + 7}
                            textAnchor="middle"
                            fill="black"
                            fontSize={14}
                        >
                            {name}
                        </text>
                    ) : null
                } */}
                {
                    depth === 2 ? (
                        <text
                            x={x + 4}
                            y={y + 18}
                            fill="#fff"
                            fontSize={10}
                            fillOpacity={0.9}
                        >
                            {root.name}-{name}
                        </text>
                    ) : null
                }
            </g>
        );
    }
}

export default class Example extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/Ldvvz2ak/';

    render() {
        return (
            <Treemap
                width={600}
                height={630}
                data={data}
                dataKey="size"
                ratio={4 / 3}
                stroke="#fff"
                fill="#8884d8"
                animationEasing="ease-in-out"
                content={<CustomizedContent colors={COLORS} />}
            >
                <Tooltip />
            </Treemap>
        );
    }
}
