import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Message from './message';

export default class Messages extends Component {
  
	constructor(props) {
        super(props);
	}
  
	render() {
        const messagesMapped = this.props.messages.map((result, index) => {
            const key = this.props.messages.length - index;
            return <Message message={result} key={key} />
        });
        
        return <div className={'col-1-1'}>
                    <div className={'content'}>
                        <ReactCSSTransitionGroup component="ul" className="msgs" transitionName="msg-transition" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                        {messagesMapped}
                        </ReactCSSTransitionGroup>
                    </div>
                </div>;
	}
}