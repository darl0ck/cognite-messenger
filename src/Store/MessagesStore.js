import { makeAutoObservable } from 'mobx';

const messagesFactory = ({message = '', selfMessage = true}) => {
	return {
		position: selfMessage ? 'right' : 'left',
		type: 'text',
		text: message,
		date: Date.now(),
	};
};

class MessagesListStore {
	activeChatRoom = 0;
	messagesList = [
		{
			user: {
				name: 'Obi-wan',
				avatar: 'https://www.esquireme.com/public/images/2019/09/02/obi-wan-show-1567178968.jpg'
			},
			messages: [
				{
					position: 'left',
					type: 'text',
					text: 'Hi there !',
					date: Date.now(),
				},
				{
					position: 'right',
					type: 'text',
					text: 'What are you doing Anakin ?',
					date: Date.now(),
				}
			]
		},
		{
			user: {
				name: 'Grievous',
				avatar: 'https://www.originalstormtrooper.ru/image/cache/data/funko/Star%20Wars%20Funko%20General%20Grievous%20Bobble-Head-1-500x500.jpg'
			},
			messages: [
				{
					position: 'left',
					type: 'text',
					text: 'Hello, General Kenobi',
					date: Date.now(),
				},
				{
					position: 'right',
					type: 'text',
					text: 'Hi !',
					date: Date.now(),
				}
			]
		},
	];
	constructor() {
		const messagesListLS = localStorage.getItem('messagesList') || '';
		if (!messagesListLS) {
			try {
				localStorage.setItem('messagesList', JSON.stringify(this.messagesList));
			} catch {}
		} else {
			try {
				this.messagesList = JSON.parse(messagesListLS) || '';
			} catch {}
		}
		
        makeAutoObservable(this)
	}
	
	setActiveChatRoom({chatRoomID}) {
		this.activeChatRoom = chatRoomID;
	}

	sendMessage({message, chatRoomIndex = 0}) {
		const preparedMessage = messagesFactory({message})
		if (this.messagesList[chatRoomIndex]) {

			this.messagesList[chatRoomIndex].messages = [...this.messagesList[chatRoomIndex].messages, preparedMessage];

			try {
				localStorage.setItem('messagesList', JSON.stringify(this.messagesList));
			} catch {}
		}
	}

	getRandomUserData() {
		return fetch('https://randomuser.me/api/')
			.then((response) => {
				return response.json();
			})
			.then(({results = {}}) => {
				return results[0] || {};
			});
	}
}

export default new MessagesListStore();