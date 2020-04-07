import React, { Component } from 'react';
import TimeSeries from './home/timeseries';
import StackedBarR from '../components/home/stackedbar';
import Turnaround from './turnaround';
import TreemapChart from '../components/home/TreemapChart'
import data from '../data/timeseriesdata'


export class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            graphOption: 2,
            timeseries : data,
            timeseriesMode: false,
        }
    }
    
    render() {
        const { graphOption, timeseries, timeseriesMode } = this.state;
        return (
            <div className="Home">
                <div className="home-left">
                        <React.Fragment>
                            <div
                                className="timeseries-header fadeInUp"
                                style={{ animationDelay: '1s' }}
                            >
                                <h2>Unit-wise Current Bed Status</h2>
                            </div>
                            <StackedBarR />
                            <div
                                className="timeseries-header fadeInUp"
                                style={{ animationDelay: '1s' }}
                            >
                                <h2>Bed Status Map</h2>
                            </div>
                            <TreemapChart />
                        </React.Fragment>

                </div>
                <div className="home-middle">

                        <React.Fragment>
                            <div
                                className="timeseries-header fadeInUp"
                                style={{ animationDelay: '1s' }}
                            >
                                <h2>Admissions, Discharges And Transfer Summary</h2>
                            </div>
                            <TimeSeries
                                timeseries={timeseries}
                                type={graphOption}
                                mode={timeseriesMode}
                            />
                        </React.Fragment>

                </div>
                <div className="home-right">
 
                        <React.Fragment>
                            <div
                                className="timeseries-header fadeInUp"
                                style={{ animationDelay: '1s' }}
                            >
                                <h2>Turn-Around Summary</h2>
                            </div>
                            <Turnaround />
                        </React.Fragment>

                </div>
            </div>
        )
    }
}

export default Home;


