import React, { Component } from "react";
import { Body, Button, Container, Content, Form, Header, Input, Label, Left, Right, Text } from "native-base";
import styled from "styled-components";
import Icon from "react-native-ionicons";
import { connect } from "react-redux";
import color from "../Styles/Color";
import { login } from "../actions/user";

class Login extends Component {
  static navigationOptions = {
    title: 'Login',
    tabBarIcon: <Icon name="person" />,
  };

  state = {
    username: "",
    password: ""
  };

  _signInAsync = async () => {
    login(this.state.username, this.state.password);
  };

  componentDidMount() {
    console.log(this.props);
  }

  componentDidUpdate() {
    console.log(this.props);
  }

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
              <StyledLabel>Benutzername</StyledLabel>
              <StyledInput
                placeholder="Benutzernamen eingeben"
                value={this.state.username}
                onChangeText={data => this.setState({ username: data })}
              />
            </StyledItem>
            <StyledItem>
              <StyledLabel>Passwort</StyledLabel>
              <StyledInput
                secureTextEntry
                placeholder="Passwort eingeben"
                value={this.state.password}
                onChangeText={data => this.setState({ password: data })}
              />
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

const mapStateToProps = state => ({
  session_id: state.user.session_id
});

const LoginWithRedux = connect(
  mapStateToProps,
  {}
)(Login);

export { LoginWithRedux as Login };

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
