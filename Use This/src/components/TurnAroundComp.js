import React from 'react';
import CustBar from "./CustBar";
import Turn from "./Turn";
import TurnLine from "./TurnLine";
import TurnBarBrush from "./TurnBarBrush";


export default function TurnAroundComp() {
    return (
        <div>
            <div className="custbar-chart">
                <font h4 className="alert-title">UnitWise TAT</font>
                <CustBar />
            </div>
            <div className="turn-chart">
                <font h4 className="alert-title">HourWise TAT</font>
                <Turn />
            </div>
            <div className="turnline-chart">
                <font h4 className="alert-title">MonthWise TAT</font>
                <TurnLine />
            </div>
            <div className="turnbarbrush-chart">
                <font h4 className="alert-title">DateWise TAT</font>
                <TurnBarBrush />
            </div>
        </div>
    );
}