import React, { Component, View } from 'react';
import Icon from 'react-native-ionicons';
import styled from 'styled-components';
import color from '../Styles/Color';

const SIZE = 64;

class ScannerButton extends Component {
  render() {
    const { navigation, onTabPress } = this.props;
    return (
      <Container>
        <Icon name="qr-scanner" color={color.blue08} size={32} />
      </Container>
    );
  }
}
export { ScannerButton };

const Container = styled.View`
  width: ${SIZE};
  height: ${SIZE};
  background: ${color.blue05};
  border-radius: 58;
  margin-bottom: 48;
  display: flex;
  align-items: center;
  justify-content: center;
  elevation: 6;
`;
const Cover = styled.View``;
