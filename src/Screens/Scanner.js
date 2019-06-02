import React, { Component } from 'react';
import { Container } from 'native-base';
import { RNCamera } from 'react-native-camera';
import io from 'socket.io-client/dist/socket.io';
import styled from 'styled-components';
import Icon from 'react-native-ionicons';
import { Dimensions } from 'react-native';
// TODO Flashmode Button
// TODO Permission Prompt
type Props = {};
class Scanner extends Component<Props> {
  static navigationOptions = {
    title: 'Scanner',
  };

  socket = null;

  state = {
    code: '',
    codeData: {},
  };

  componentDidMount() {
    this.socket = io('https://seminarkurs.alexkutschera.de/', {
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
        <RNCamera
          flashMode={RNCamera.Constants.FlashMode.off}
          ref={ref => {
            this.camera = ref;
          }}
          style={{
            flex: 1,
          }}
          onBarCodeRead={data => this.loadItemData(data.data)}
          captureAudio={false}
        />
        <Toolbar>
          <StyledIcon name="search" />
          <StyledIcon name="flash-off" />
        </Toolbar>
      </Container>
    );
  }
}

export { Scanner };

const Overlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: blue;
  opacity: 1;
`;
const Toolbar = styled.View`
  position: absolute;
  width: ${Dimensions.get('window').width};
  left: 0;
  top: 24;
  height: 32;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledIcon = styled(Icon)`
  margin-left: 24;
  margin-right: 24;
  border-radius: 50;
  width: 32;
  height: 32;
  text-align: center;
`;
