import React from 'react';
import {inject, observer} from "mobx-react";

import './App.scss';
import ChatList from './Components/ChatList';
import MessagesListWrapper from './Components/MessagesList';
import MessagesInputWrapper from './Components/MessagesInput';
import UserHeaderWrapper from './Components/UserHeader';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: null
    }
  }
  componentDidMount() {
    this.props.MessagesStore.getRandomUserData().then(res => {
      this.setState({
        userData: res,
      })
    });
  }
  render() {
    return (
      <div className="App">
          {this.state.userData && <UserHeaderWrapper
            userData={this.state.userData}
          />}
          <div className="App__chat">
            <section className="App__chat-list">
              <ChatList/>
            </section>
            <section className="App__messages-list">
              <MessagesListWrapper/>
              <MessagesInputWrapper/>
            </section>
          </div>
      </div>
    );
  }
}

export default inject('MessagesStore')(observer(App));
