import React, { Component } from 'react';
import {
  Footer,
  Left,
  Body,
  Right,
  Button,
  Title,
  Text,
  Icon,
  FooterTab,
} from 'native-base';

class DefaultFooter extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button icon onPress={() => this.props.navigation.navigate('Login')}>
            <Icon name="person" />
          </Button>
          <Button
            icon
            onPress={() => this.props.navigation.navigate('Scanner')}
          >
            <Icon name="barcode" />
          </Button>
          <Button icon onPress={() => this.props.navigation.navigate('Hilfe')}>
            <Icon name="md-help-circle" />
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export { DefaultFooter };
