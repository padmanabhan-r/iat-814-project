import React, { Component } from 'react';
import { Slider, Checkbox, Divider, DatePicker } from 'antd';
import moment from 'moment';
// import { DatePicker } from 'antd';


import 'antd/dist/antd.css';
import './view3.css';

const CheckboxGroup = Checkbox.Group;
const { RangePicker } = DatePicker;
const dateFormat = 'DD-MMM';

const plainOptions = ['1N', '1S', '1W', 'BP', 'SCU'];
const defaultCheckedList = ['1N', '1S', '1W', 'BP', 'SCU'];

class FilterComp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checkedList: defaultCheckedList,
            indeterminate: true,
            checkAll: false,
        };
    }

    onChangeCheckbox = checkedList => {
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
            checkAll: checkedList.length === plainOptions.length,
        });
        this.props.changeIncludedUnit(checkedList);
    };

    onCheckAllChange = e => {
        const checkedList = e.target.checked ? plainOptions : [];
        this.setState({
            checkedList: checkedList,
            indeterminate: false,
            checkAll: e.target.checked,
        });
        this.props.changeIncludedUnit(checkedList);
    };

    onChangeSilder = value => {
        this.props.changeDate(value);
    };

    onDatePickerChange = (value, dateString) => {
        this.props.changeDate(dateString);
    };

    // function onDatePickerChange(value, dateString) {
    // console.log('Selected Time: ', value);
    // console.log('Formatted Selected Time: ', dateString);
    // this.props.changeDate(dateString);}


    render() {
        return (
            <div>

                <div className="fadeInUp raisedbox" style={{animationDelay: '1.3s'}}>
                    <div className="check-header">Filter By Units</div>
                    <div className="check-box" >
                        <Checkbox
                            indeterminate={this.state.indeterminate}
                            onChange={this.onCheckAllChange}
                            checked={this.state.checkAll}
                        >
                            Select All Units
                    </Checkbox>
                    <br />
                    </div>
                    <div className="check-box">
                        <CheckboxGroup
                            options={plainOptions}
                            value={this.state.checkedList}
                            onChange={this.onChangeCheckbox}
                        />
                    </div>
                    <div className="check-header">Choose Date(s)</div>
                    
                    {/* <Slider range defaultValue={['0101', '3112']} onChange={this.onChangeSilder}/> */}
                    <RangePicker
                        defaultValue={[moment('01-Jan', dateFormat), moment('31-Dec', dateFormat)]}
                        format="DD-MMM"
                        onChange={this.onDatePickerChange}
                    />
                </div>
            </div>
        )
    }
}

export default FilterComp