import React, { Component } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  StatusBar,
  View,
} from 'react-native';
import io from "socket.io-client"
import tailwind from 'tailwind-rn';

class App extends Component {

  state = {
    chatMessage: ""
  }

  componentDidMount() {
    this.socket = io('http://127.0.0.1:3000')
  }

  render() {
    const {chatMessage} = this.state

    const submitChatMessage = () => {
      this.socket.emit('chat message', this.state.chatMessage)
      this.setState({
        chatMessage: ""
      })
    }

    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={tailwind('h-full')}>
          <TextInput 
            value={chatMessage}
            placeholder="Type your message here..."
            autoCorrect={false} 
            onChangeText={chatMessage => this.setState({chatMessage})} 
            onSubmitEditing={() => submitChatMessage()} 
            style={tailwind('m-4 p-4 rounded-full border-2')}/>
          <View style={tailwind('p-6')}>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

export default App;