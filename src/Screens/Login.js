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
  Card,
  CardItem,
  Form,
  Item,
  Input,
  Content,
} from 'native-base';
import { DefaultHeader, DefaultFooter } from '../Components';

class Login extends Component {
  static navigationOptions = {
    title: 'Login',
  };

  render() {
    return (
      <Container>
        <DefaultHeader title="Login" navigation={this.props.navigation} />
        <Content>
          <Card style={{ flex: 1 }}>
            <Form>
              <Item>
                <Input placeholder="Username" />
              </Item>
              <Item>
                <Input placeholder="Password" />
              </Item>
              <Item last>
                <Button style={{ flex: 1 }}>
                  <Text>Login</Text>
                </Button>
              </Item>
            </Form>
          </Card>
        </Content>
      </Container>
    );
  }
}

export { Login };
