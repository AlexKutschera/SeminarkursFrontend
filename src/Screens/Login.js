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
  Header,
  Left,
  Body,
  Right,
  Label,
} from 'native-base';
import styled from 'styled-components';
import Icon from 'react-native-ionicons';
import { DefaultHeader } from '../Components';
import color from '../Styles/Color';

class Login extends Component {
  static navigationOptions = {
    title: 'Login',
    tabBarIcon: <Icon name="person" />,
  };

  render() {
    return (
      <Container style={{ backgroundColor: color.gray10 }}>
        <StyledHeader style={{ backgroundColor: color.blue04 }}>
          <StyledLeft>
            <Button
              iconLeft
              transparent
              onPress={() => this.props.navigation.goBack()}
            >
              <Icon name="arrow-back" color={color.white} />
            </Button>
          </StyledLeft>
          <Body>
            <StyledTitle>{`Willkommen\nzurück`}</StyledTitle>
          </Body>
          <Right />
        </StyledHeader>
        <Content>
          <LoginForm style={{ flex: 1 }}>
            <Form>
              <Item stackedLabel>
                <Label>E-Mail</Label>
                <Input placeholder="E-Mail eingeben" />
              </Item>
              <Item stackedLabel>
                <Label>Passwort</Label>
                <Input placeholder="Passwort eingeben" />
              </Item>
              <Item last>
                <StyledButton>
                  <ButtonText>Login</ButtonText>
                </StyledButton>
              </Item>
            </Form>
          </LoginForm>
        </Content>
      </Container>
    );
  }
}

export { Login };

const StyledTitle = styled.Text`
  font-size: 34;
  line-height: 40;
  width: 200;
  margin-left: 18;
  color: ${color.gray10};
`;
const StyledHeader = styled(Header)`
  height: 280;
`;
const StyledLeft = styled(Left)`
  position: absolute;
  left: 12;
  top: 12;
`;
const LoginForm = styled.View`
  padding-left: 32;
  padding-right: 32;
`;
const StyledButton = styled(Button)`
  background-color: ${color.blue06};
  height: 32;
  border-radius: 2;
  padding-left: 12;
  padding-right: 12;
`;
const ButtonText = styled(Text)`
  font-size: 14;
  font-weight: bold;
  line-height: 16;
  letter-spacing: 1.35;
  text-transform: uppercase;
`;
