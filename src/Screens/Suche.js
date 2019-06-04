import React, { Component } from 'react';
import {
  Container,
  Header,
  Left,
  Button,
  Right,
  Item,
  Text,
  Input,
} from 'native-base';
import Icon from 'react-native-ionicons';
import styled from 'styled-components';
import color from '../Styles/Color';

//  TODO Suchscreen Innenleben

class Suche extends Component {
  static navigationOptions = {
    title: 'Suche',
  };

  render() {
    return (
      <Container>
        <SearchHeader searchBar>
          <BackButton
            iconLeft
            transparent
            onPress={() => this.props.navigation.goBack()}
          >
            <Icon name="arrow-back" color={color.gray05} />
          </BackButton>
          <SearchBar>
            <SearchInput placeholder="Search" />
          </SearchBar>
        </SearchHeader>
      </Container>
    );
  }
}

export { Suche };

const SearchHeader = styled(Header)`
  height: 70;
  background-color: ${color.gray10};
  elevation: 0;
`;
const BackButton = styled(Button)`
  flex: 1;
`;
const SearchBar = styled(Item)`
  margin-left: 25;
  flex: 4;
`;
const SearchInput = styled(Input)`
  background: ${color.gray10} !important;
  color: ${color.blue09};
  border-bottom-width: 1;
  border-bottom-color: ${color.blue09};
`;
