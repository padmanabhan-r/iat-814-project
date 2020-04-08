import React, { Component } from 'react';
import moment from 'moment';
import TimeSeries from './home/timeseries';
import StackedBarR from '../components/home/stackedbar';
import Turnaround from './turnaround';
import TreemapChart from '../components/home/TreemapChart'
import FilterComp from './filtercomp/filtercomp';
import TurnUnit from './turnaround/turnunit';
import TurnHr from './turnaround/turnhr';
import TurnHr2 from './turnaround/turnhr2';
import TurnMonth from './turnaround/turnmonth';
import TurnDate from './turnaround/turndate';

//Data Imports
import data from '../data/timeseriesdata'
import bedstatusdata from '../data/bedstatusdata';
import turnaround_data from '../data/turnaround_data';
import big_data from '../data/turn_big';
import hosptree2 from '../data/hosptree2';


const dateFormat = 'DD-MMM';

export class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            graphOption: 2,
            timeseries: data,
            timeseriesMode: false,
            includedUnit: ['1N', '1S', '1W', 'BP', 'SCU'],
            GreaterThanDate: moment('01-Jan', dateFormat),
            LessThanDate: moment('31-Dec', dateFormat)
        }
    }

    changeIncludedUnit = value => {
        this.setState({
            includedUnit: value
        })
    }

    changeDate = value => {
        this.setState({
            GreaterThanDate: moment(value[0], dateFormat),
            LessThanDate: moment(value[1], dateFormat)
        })
    }

    filData = (includedUnit, data) => {
        // data = data[0];
        let result = [{
            "name": "Units",
            "children": []
        }];

        data.forEach(d => {

            d.children.forEach(e => {
                // console.log("From Func-e", e, includedUnit);
                if (includedUnit.includes(e.name)) {
                    result[0].children.push(e);
                }
            }
            )
        });
        console.log("Result", result);
        return result;

    };

    render() {
        const { graphOption, timeseries, timeseriesMode, includedUnit, GreaterThanDate, LessThanDate } = this.state;
        const filtered_bedstatusdata = bedstatusdata.filter(d => includedUnit.indexOf(d.Unit) !== -1);
        const filteredData = turnaround_data.filter(d => includedUnit.indexOf(d.unit) !== -1)
            .filter(d => moment(d.Date, dateFormat) >= GreaterThanDate && moment(d.Date, dateFormat) <= LessThanDate);
        const filteredBigData = big_data.filter(d => includedUnit.indexOf(d.unit) !== -1)
            .filter(d => moment(d.date, dateFormat) >= GreaterThanDate && moment(d.date, dateFormat) <= LessThanDate);
        // const filtered_hosptree2 = hosptree2.filter(d => includedUnit.indexOf(d.children.name) !== -1);
        const filtered_hosptree2 = this.filData(includedUnit, hosptree2);
        console.log("Fil Tree");
        console.log(filtered_hosptree2);
        return (
            <div className="Home">
                <div className="home-left">
                    <React.Fragment>
                        <FilterComp
                            changeDate={this.changeDate}
                            changeIncludedUnit={this.changeIncludedUnit}
                        />
                        <div
                            className="timeseries-header fadeInUp"
                            style={{ animationDelay: '1.3s' }}
                        >
                            <h2>Unit-wise Current Bed Status</h2>
                        </div>
                        <StackedBarR data={filtered_bedstatusdata} />
                        <div
                            className="timeseries-header fadeInUp"
                            style={{ animationDelay: '1.3s' }}
                        >
                            <h2>Bed Status Map</h2>
                        </div>
                        <TreemapChart data={filtered_hosptree2} />
                    </React.Fragment>

                </div>
                <div className="home-middle">
                    <React.Fragment>

                        <div
                            className="timeseries-header fadeInUp"
                            style={{ animationDelay: '1.3s' }}
                        >
                            <h2>BTAT UnitWise Summary</h2>
                        </div>
                        <TurnUnit data={filteredData} />
                        <div
                            className="timeseries-header fadeInUp"
                            style={{ animationDelay: '1.3s' }}
                        >
                            <h2>BTAT Daily Summary</h2>
                        </div>
                        <TurnDate data={filteredData} />
                        <div
                            className="timeseries-header fadeInUp"
                            style={{ animationDelay: '1.3s' }}
                        >
                            <h2>BTAT Hourly Summary</h2>
                        </div>
                        <TurnHr2 data={filteredBigData} />

                    </React.Fragment>

                </div>
                <div className="home-right">
                    <React.Fragment>



                        <div
                            className="timeseries-header fadeInUp"
                            style={{ animationDelay: '1.3s' }}
                        >
                            <h2>Recent Summary - All Units</h2>
                        </div>
                        <TimeSeries
                            timeseries={timeseries}
                            type={graphOption}
                            mode={timeseriesMode}
                        />
                    </React.Fragment>

                </div>
            </div>
        )
    }
}

export default Home;


