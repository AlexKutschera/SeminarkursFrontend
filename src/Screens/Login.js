import React, { Component } from 'react';
import {
  Container,
  Button,
  Text,
  Card,
  Form,
  Item,
  Input,
  Content,
  Icon,
} from 'native-base';
import { DefaultHeader } from '../Components';

class Login extends Component {
  static navigationOptions = {
    title: 'Login',
    tabBarIcon: <Icon name="person" />,
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
