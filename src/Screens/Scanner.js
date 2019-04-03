import React, { Component } from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Icon,
  Content,
} from 'native-base';
import { RNCamera } from 'react-native-camera';
import { View, Text } from 'react-native';
import io from 'socket.io-client/dist/socket.io';
import { DefaultHeader, DefaultFooter } from '../Components';

type Props = {};
class Scanner extends Component<Props> {
  static navigationOptions = {
    title: 'Scanner',
  };

  socket = null;

  componentDidMount() {
    this.socket = io('https://socketio-chat-example.now.sh/', {
      transports: ['websocket'],
      upgrade: false,
      rejectUnauthorized: null,
    });
    this.socket.on('connect', data => {
      console.log('connected');
    });
    this.socket.on('reconnect_error', error => {
      console.log(error);
    });
    this.socket.on('item', data => {
      if (data.length > 0) {
        this.setState({
          codeData: data[0],
        });
      }
      console.log(data);
    });
    console.log(this.socket);
  }

  state = {
    code: '',
    codeData: {},
  };

  loadItemData(code) {
    if (code !== this.state.code) {
      console.log(code);
      console.log(this.socket.connected);
      this.setState({
        code,
      });
      this.socket.emit('item', { ITEM_ID: code });
    }
  }

  render() {
    return (
      <Container>
        <DefaultHeader title="Scanner" navigation={this.props.navigation} />
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={{
            flex: 1,
          }}
          onBarCodeRead={data => this.loadItemData(data.data)}
          captureAudio={false}
        />
        <DefaultFooter navigation={this.props.navigation} />
      </Container>
    );
  }
}

export { Scanner };
