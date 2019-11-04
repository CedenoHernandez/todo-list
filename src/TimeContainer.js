import React, { Component } from 'react';
import moment from "moment";

export default class TimeContainer extends Component {
    constructor(props) {
        super(props)
            this.state = {
            currentDate: new Date(),
            markedDate: moment(new Date()).format("YYYY-MM-DD")
        };
    }
    render() {
        const today = this.state.currentDate;
        const day = moment(today).format("dddd");
        const date = moment(today).format("MMMM D, YYYY");
        return (
            <div>
                {day},
                {date}
            </div>
        )
    }
}
