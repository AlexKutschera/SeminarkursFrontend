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
  Content,
  Grid,
  Col,
} from 'native-base';
import { DefaultHeader, DefaultFooter } from '../Components';

class Suche extends Component {
  static navigationOptions = {
    title: 'Suche',
  };

  render() {
    return (
      <Container>
        <DefaultHeader title="Suche" navigation={this.props.navigation} />
      </Container>
    );
  }
}

export { Suche };
