import React, { Component } from 'react';
import { Container, Text, Button } from 'native-base';
import { AsyncStorage } from 'react-native';

class Profile extends Component {
  static navigationOptions = {
    title: 'Profile',
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <Container>
        <Text>Profile</Text>
        <Button onPress={this._signOutAsync}>
          <Text>SignOut</Text>
        </Button>
      </Container>
    );
  }
}

export { Profile };
