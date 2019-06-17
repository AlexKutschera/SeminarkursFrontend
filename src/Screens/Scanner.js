import React, { Component } from 'react';
import { Container, Button, Text } from 'native-base';
import { RNCamera } from 'react-native-camera';
import io from 'socket.io-client/dist/socket.io';
import styled from 'styled-components';
import Icon from 'react-native-ionicons';
import { Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SwipeUpDown from 'react-native-swipe-up-down';
import { Product } from './Product';
import { ProductCard, ProductSheet } from '../Components';

// TODO Flashmode Button
// TODO Permission Prompt
type Props = {};
class Scanner extends Component<Props> {
  static navigationOptions = {
    title: 'Scanner',
  };

  socket = null;

  constructor(props) {
    super(props);
    this.state = {
      code: '',
      codeData: {},
      isRead: false,
    };
  }

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

  _showSuche = () => {
    this.props.navigation.navigate('Suche');
  };

  loadItemData(code) {
    this.setState({
      isRead: true, // Invert isRead
    });
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
    setTimeout(() => {
      this.setState({
        isRead: true, // Invert isRead
      });
    }, 3000);
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
          <SearchButton onPress={this._showSuche}>
            <StyledIcon name="search" />
          </SearchButton>
          <SearchButton>
            <StyledIcon name="flash-off" />
          </SearchButton>
        </Toolbar>
        {this.state.isRead && <Popup />}
      </Container>
    );
  }
}

export { Scanner };

const Popup = styled(ProductSheet)`
  width: ${Dimensions.get('window').width};
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 999;
  height: 200;
`;
const Toolbar = styled.View`
  width: ${Dimensions.get('window').width};
  position: absolute;
  left: 0;
  top: 32;
  height: 32;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledIcon = styled(Icon)`
  text-align: center;
  text-align-vertical: center;
`;
const SearchButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 42;
  background-color: rgba(255, 255, 255, 0.25);
  max-width: 42;
  height: 42;
  margin-left: 24;
  margin-right: 24;
`;
