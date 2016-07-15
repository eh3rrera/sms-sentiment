import React, { Component } from 'react';

export default class Gauge extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // store the object on `this.gauge` so we can access it elsewhere
        this.gauge = $(this.refs.gauge).epoch({ type: 'time.gauge', value: this.props.sentiment });
    }

    componentWillReceiveProps(nextProps) {
        this.gauge.update(nextProps.sentiment);   
	}

    render() {
        return (
            <div id="real-time-gauge" className={'epoch gauge-large'} ref="gauge"></div>
        );
    }
}