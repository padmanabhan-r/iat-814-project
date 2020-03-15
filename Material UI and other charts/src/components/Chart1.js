import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import data from '../data/unit_bed_status';

class Chart1 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            chartData: data
        }
    }

    render() {
        return (
            <div>

                <Bar
                    data={this.state.chartData}
                    options={{
                        maintainAspectRatio: false,
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                    }}
                    height={300}
                />

            </div>
        )
    }
}

export default Chart1
