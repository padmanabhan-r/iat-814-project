import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import data from '../data/DailyStatus';
import Chart1 from './Chart1'
import DBrushBar from "./DBrushBar";
import TreeM from "./TreeM";




function Alert(props) {
    return <MuiAlert elevation={5} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
    root: {
        padding: '1px',
        '& > * + *': {
            marginTop: theme.spacing(1.55),
        },
    },
}));


export default function CustomizedSnackbars() {
    const classes = useStyles();

    return (
        <div>
            {/* <Alert severity="error" variant="filled">Status : Refreshed through 3/24/2020 8:30:42 PM</Alert> */}
            <div className="status-bar">
                <font h4 className="alert-title">Today's Summary Status</font>
                <div className={classes.root}>
                    <Alert severity="info">Total Admissions Today : 2</Alert>
                    <Alert severity="info">Total Discharges Today : 2</Alert>
                    <Alert severity="info">Total Transfers Today : 1</Alert>
                    <Alert severity="success">Total Beds : 48</Alert>
                    <Alert severity="warning">Total Occupied : 18</Alert>
                    <Alert severity="info">Occupancy Percentage : 37.5%</Alert>
                    <Alert severity="error">Average Turnaround Time : 2 Hours</Alert>
                    <Alert severity="success">Average Cleaning Time: 17 Minutes</Alert>
                    <Alert severity="error">Patients in Critical Care : 4</Alert>
                    <Alert severity="error">Patients in Emergency : 4</Alert>
                </div>
            </div>
            <div className="adt-chart">
                <font h4 className="alert-title">Admissions, Discharges And Transfers</font>
                <Chart1 />
            </div>
            <div className="dbrush-chart">
                <font h4 className="alert-title">Discharges Summary</font>
                <DBrushBar />
            </div>
            <div className="treem-chart">
                <font h4 className="alert-title">Current Bed Status</font>
                <TreeM />
            </div>
        </div>
    );
}