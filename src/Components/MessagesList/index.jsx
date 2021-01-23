import React from 'react';
import { MessageList } from 'react-chat-elements'
import {inject, observer} from "mobx-react";

import './styles.scss';

class MessagesListWrapper extends React.Component {
		render() {
			const activeChatRoom = this.props.MessagesStore.activeChatRoom;
			const messagesList = (this.props.MessagesStore.messagesList[activeChatRoom] || {}).messages || [];

			return <MessageList
				className='message-list'
				lockable={true}
				toBottomHeight={'100%'}
				dataSource={messagesList}	
			/>;
		}
  }

export default inject('MessagesStore')(observer(MessagesListWrapper));
