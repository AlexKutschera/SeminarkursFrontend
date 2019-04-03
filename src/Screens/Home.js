import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Text,
  Left,
  Icon,
  Body,
  Title,
  Right,
} from 'native-base';
import { DefaultHeader, DefaultFooter } from '../Components';

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Header>
          <Left style={{ flex: 2 }} />
          <Body style={{ flex: 1 }}>
            <Title>Home</Title>
          </Body>
          <Right style={{ flex: 2 }}>
            <Button
              iconLeft
              transparent
              onPress={() => this.props.navigation.navigate('Suche')}
            >
              <Icon name="search" />
            </Button>
          </Right>
        </Header>
        <Content>
          <Button
            title="Scanner"
            onPress={() => this.props.navigation.navigate('Scanner')}
          />
          <Button
            title="Login"
            onPress={() => this.props.navigation.navigate('Login')}
          />
          <Button
            title="Suche"
            onPress={() => this.props.navigation.navigate('Suche')}
          />
        </Content>
        <DefaultFooter navigation={this.props.navigation} />
      </Container>
    );
  }
}

export { Home };
