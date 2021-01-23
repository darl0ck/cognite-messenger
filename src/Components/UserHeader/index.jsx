import React from 'react';
import {inject, observer} from "mobx-react";
import './styles.scss';

class UserHeaderWrapper extends React.Component {
	render() {
		const { userData = {} } = this.props;
		const { name = '', picture = {}} = userData;
		return <>
			<div className="user-header">
				<img
					className="user-header__image"
					src={picture.thumbnail}
					alt={name.first}
				/>
				Hello, {name.first}
			</div>
		</>;
	}
}

export default inject('MessagesStore')(observer(UserHeaderWrapper));
