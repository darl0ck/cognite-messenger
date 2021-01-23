import React from 'react';

import './styles.scss';
import {inject, observer} from "mobx-react";

class MessagesInputWrapper extends React.Component {
	constructor() {
		super();
		this.state = {
			messageText: ''
		};
	}

	captureMessageInputVal = ({target = {}}) => {
		const { value = ''} = target;
		this.setState({messageText: value});
	}

	sendMessage = ({key = ''}) => {
		if (key === 'Enter' && this.state.messageText) {
			const chatRoomIndex = this.props.MessagesStore.activeChatRoom || 0;

			this.props.MessagesStore.sendMessage({user: 'test1', message: this.state.messageText, chatRoomIndex});
			
			this.setState({messageText: ''});
		}
	}

	render() {
	  return <>
		    <input
            	className="message-input"
            	onChange={this.captureMessageInputVal}
				onKeyDown={this.sendMessage}
				value={this.state.messageText}
          />
	  </>;
	}
  }

export default inject('MessagesStore')(observer(MessagesInputWrapper));
