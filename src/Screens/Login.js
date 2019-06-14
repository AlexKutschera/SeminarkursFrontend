import React, { Component } from 'react';
import {
  Container,
  Button,
  Text,
  Form,
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
import { AsyncStorage } from 'react-native';
import { DefaultHeader } from '../Components';
import color from '../Styles/Color';

class Login extends Component {
  static navigationOptions = {
    title: 'Login',
    tabBarIcon: <Icon name="person" />,
  };

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Profile');
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
          <LoginForm>
            <StyledItem>
              <StyledLabel>E-Mail</StyledLabel>
              <StyledInput placeholder="E-Mail eingeben" />
            </StyledItem>
            <StyledItem>
              <StyledLabel>Passwort</StyledLabel>
              <StyledInput placeholder="Passwort eingeben" />
            </StyledItem>
            <StyledItem>
              <StyledButton onPress={this._signInAsync}>
                <ButtonText>Login</ButtonText>
              </StyledButton>
            </StyledItem>
          </LoginForm>
        </Content>
      </Container>
    );
  }
}

export { Login };

const StyledItem = styled.View`
  border-bottom-width: 0;
  margin-right: 8;
  margin-bottom: 12;
`;

const StyledLabel = styled(Label)`
  font-size: 14;
  font-weight: bold;
  line-height: 24;
  color: ${color.gray03};
`;

const StyledInput = styled(Input)`
  border-bottom-color: ${color.blue09};
  border-bottom-width: 1;
  color: ${color.blue09};
  margin-right: 8;
`;

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
const LoginForm = styled(Form)`
  flex: 1;
  margin-left: 32;
  margin-right: 32;
  margin-top: 32;
`;
const StyledButton = styled(Button)`
  background-color: ${color.blue06};
  height: 36;
  border-radius: 2;
  padding-left: 12;
  padding-right: 12;
  margin-top: 20;
`;
const ButtonText = styled(Text)`
  font-size: 14;
  font-weight: bold;
  line-height: 16;
  letter-spacing: 1.35;
  text-transform: uppercase;
`;
