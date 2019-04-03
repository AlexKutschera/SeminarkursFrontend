import React, { Component } from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Text,
  Icon,
} from 'native-base';

class DefaultHeader extends Component {
  render() {
    return (
      <Header>
        <Left>
          <Button
            iconLeft
            transparent
            onPress={() => this.props.navigation.goBack()}
          >
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right>
          <Button
            iconLeft
            transparent
            onPress={() => this.props.navigation.navigate('Suche')}
          >
            <Icon name="search" />
          </Button>
        </Right>
      </Header>
    );
  }
}

export { DefaultHeader };
