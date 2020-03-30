import React from 'react';
// import CustBar from "./CustBar";
// import Turn from "./Turn";
// import TurnLine from "./TurnLine";
// import TurnBarBrush from "./TurnBarBrush";
import TreemapChart from './TreemapChart';
import D3BarChart2 from './D3BarChart2';
import ZommArea from './ZommArea';


export default function TurnAroundComp() {
    return (
        <div>
            <div className="treemapUnits-chart">
                <font h4 className="alert-title">Unit Hierarchy </font>
                <TreemapChart />
            </div>
            <div className="Admission-chart">
                <font h4 className="alert-title">Admissions by Unit</font>
                <D3BarChart2 />
            </div>
            <div className="DateAdm-chart">
                <font h4 className="alert-title">Admissions across the month</font>
                <ZommArea />
            </div>
            
        </div>
    );
}