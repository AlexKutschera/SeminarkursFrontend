/*
 * Copyright (c) 2019
 */

import React, { Component } from "react";
import { Body, Button, Container } from "native-base";
import { Dimensions } from "react-native";
import styled from "styled-components";
import Icon from "react-native-ionicons";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import color from "../Styles/Color";
import { moderateScale, verticalScale } from "../Styles/scaling";
import { logout } from "../actions/user";

const { width, height } = Dimensions.get('window');
class Profile extends Component {
  static navigationOptions = {
    title: 'Profile',
  };

  _logout() {
    logout();
  }

  componentDidUpdate() {
    console.log(this.props);
  }

  render() {
    return (
      <Container style={{ backgroundColor: color.teal03 }}>
        <StyledHeader /* style={{ backgroundColor: color.teal01 }} */>
          <BackButton
            iconLeft
            transparent
            onPress={() => this.props.navigation.goBack()}
          >
            <Icon name="arrow-back" color={color.white} />
          </BackButton>
        </StyledHeader>
        <StyledBody>
          <ProfileCard>
            <Avatar source={require('../../assets/Avatar.jpg')} />
            <Name>{this.props.username}</Name>
            <Abteilung>{this.props.department}</Abteilung>
          </ProfileCard>
          <SignOutButton onPress={this._logout}>
            <ButtonText>Abmelden</ButtonText>
          </SignOutButton>
        </StyledBody>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  username: state.user.username,
  department: state.user.department,
});

const ProfileWithNavigation = withNavigation(Profile);
const ProfileWithRedux = connect(
  mapStateToProps,
  {}
)(ProfileWithNavigation);

export { ProfileWithRedux as Profile };

const SignOutButton = styled(Button)`
  padding-top: ${moderateScale(10)};
  padding-bottom: ${moderateScale(10)};
  padding-left: ${moderateScale(12)};
  padding-right: ${moderateScale(12)};
  border-radius: ${moderateScale(4)};
  elevation: 0;
  background-color: ${color.teal02};
  align-self: center;
`;
const ButtonText = styled.Text`
  font-size: ${moderateScale(14)};
  line-height: ${moderateScale(16)};
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: ${moderateScale(1.35)};
  color: ${color.teal09};
`;

const Name = styled.Text`
  color: ${color.gray10};
  text-align: center;
  font-size: ${moderateScale(24)};
  font-weight: bold;
  line-height: ${moderateScale(28)};
  margin-top: ${moderateScale(8)};
`;
const Abteilung = styled.Text`
  color: ${color.teal08};
  font-size: ${moderateScale(14)};
  line-height: ${moderateScale(24)};
`;
const StyledHeader = styled.View`
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
`;
const StyledBody = styled(Body)`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProfileCard = styled.View`
  flex: 1;
  max-height: ${verticalScale(200)};
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const BackButton = styled(Button)`
  flex: 1;
  position: absolute;
  left: 12;
  top: 12;
`;

const Avatar = styled.Image`
  width: ${moderateScale(80)};
  height: ${moderateScale(80)};
  border-radius: ${moderateScale(80)};
  border-width: 1;
  border-color: rgba(0, 0, 0, 0.2);
`;
