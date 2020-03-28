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
                            position: 'top',
                            labels: {
                                fontColor: "black",
                            },
                        },
                        scales: {
                            xAxes: [{
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    fontColor: "black",
                                    fontSize: 10
                                },
                                ticks: {
                                    fontColor: "black",
                                    fontSize: 14
                                },
                                gridLines: { color: "black" }
                            }],
                            yAxes: [{
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Number of Patients',
                                    fontColor: "black",
                                    fontSize: 13
                                },
                                ticks: {
                                    fontColor: "black",
                                    fontSize: 14
                                },
                                responsive: true
                            }]
                        }
                    }}
                    height={250}
                />

            </div>
        )
    }
}

export default Chart1
