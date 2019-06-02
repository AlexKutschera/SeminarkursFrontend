import React, { Component } from 'react';
import { Header, Left, Body, Right, Button, Title } from 'native-base';
import Icon from 'react-native-ionicons';
import color from '../Styles/Color';

class DefaultHeader extends Component {
  render() {
    return (
      <Header style={{ backgroundColor: color.blue04 }}>
        <Left>
          <Button
            iconLeft
            transparent
            onPress={() => this.props.navigation.goBack()}
          >
            <Icon name="arrow-round-back" />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}

export { DefaultHeader };
