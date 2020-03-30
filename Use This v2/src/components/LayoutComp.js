import React from 'react';
// import CustBar from "./CustBar";
// import Turn from "./Turn";
// import TurnLine from "./TurnLine";
// import TurnBarBrush from "./TurnBarBrush";
// import TreemapChart from './TreemapChart';
// import D3BarChart2 from './D3BarChart2';
// import ZommArea from './ZommArea';
 import DotPlotPC from './DotPlotPC';
 import DotPlotPT from './DotPlotPT';

export default function LayoutComp() {
    return (
        <div>
            <div className="Potential-Discharges">
                <font h4 className="alert-title">Potential-Discharges </font>
                <DotPlotPC />
            </div>
            <div className="Potential-Transfers">
                <font h4 className="alert-title">Potential Transfers</font>
                <DotPlotPT />
            </div>
                       
        </div>
    );
}