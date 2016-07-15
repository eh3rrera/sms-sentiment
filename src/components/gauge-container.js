import React, { Component } from 'react';
import Gauge from './gauge';

export default class GaugeContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'col-1-1'}>
                <div className={'content center-align'}>
                    <h1>SMS Sentiment</h1>
                    <Gauge sentiment={this.props.sentiment} />
                </div>
            </div>
        );
    }
}