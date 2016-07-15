import React, { Component } from 'react';

export default class Message extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {from, text, country, sentiment} = this.props.message;
        return (
            <li className={'msg'}>
                <div className={'msg-from'}>+XXXXX - XXX - {from.slice(-4)}</div>
                <div className={'msg-text'}>{text}</div>
                <ul className={'msg-info'}>
                    <li>
                        Country: <span>{country}</span>
                    </li>
                    <li>
                        Sentiment: <span>{sentiment}</span>
                    </li>
                </ul>
            </li>
        );
    }
}