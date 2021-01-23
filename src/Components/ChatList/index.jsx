import React from 'react';
import { ChatItem } from 'react-chat-elements'
import {inject, observer} from "mobx-react";

// import './styles.scss';

class ChatsListWrapper extends React.Component {
		setActiveChatRoom(chatRoomID) {
			this.props.MessagesStore.setActiveChatRoom({
				chatRoomID
			})
		}
		render() {
			return this.props.MessagesStore.messagesList.map(({user = {}, messages = []}, index) => {
				const msgLength = messages.length;
				const latestMessage = (messages[msgLength - 1] && messages[msgLength - 1]) || '';
				return <ChatItem
					key={index}
					avatar={`${user.avatar}`}
					title={`${user.name}`}
					subtitle={latestMessage.text || ''}
					date={new Date(latestMessage.date)}
					unread={0} 
					onClick={() => this.setActiveChatRoom(index)}
				/>
			});
		}
  }

export default inject('MessagesStore')(observer(ChatsListWrapper));
