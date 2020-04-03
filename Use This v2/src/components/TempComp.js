import React from 'react';
// import CustBar from "./CustBar";
// import Turn from "./Turn";
// import TurnLine from "./TurnLine";
// import TurnBarBrush from "./TurnBarBrush";
import TreemapChart from './TreemapChart';
import D3BarChart2 from './D3BarChart2';
import ZommArea from './ZommArea';
import Temp from './Temp';
import CapLine from './CapLine';
import  GaugeChart from './GaugeChart';
import D3BarChart4 from './D3BarChart4';
import HeatmapChart from './heatmapPT';

export default function TurnAroundComp() {
    return (
        <div>
            <div className="TAT-bar1">
                <font h4 className="alert-title">TAT-bar1 </font>
                <HeatmapChart />
            </div>
            
            {/* <div className="Capacity-ch1">
                <font h4 className="alert-title">Bed Capacity</font>
                <CapLine />
            </div>
            <div className="Gauge-chart">
                <font h4 className="chart-title" >Occupancy Rate</font>
                <GaugeChart />
            </div> */}


        </div>
    );
}