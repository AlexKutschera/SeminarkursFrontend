import React, { Component } from 'react';
import { Container, Icon } from 'native-base';
import { RNCamera } from 'react-native-camera';
import io from 'socket.io-client/dist/socket.io';
import { DefaultHeader } from '../Components';
// TODO Flashmode Button
// TODO Permission Prompt
type Props = {};
class Scanner extends Component<Props> {
  static navigationOptions = {
    title: 'Scanner',
    tabBarIcon: <Icon name="barcode" />,
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
        <DefaultHeader title="Scanner" navigation={this.props.navigation} />
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
      </Container>
    );
  }
}

export { Scanner };
