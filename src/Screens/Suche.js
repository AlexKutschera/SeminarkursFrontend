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
  Content,
} from 'native-base';
import Icon from 'react-native-ionicons';
import styled from 'styled-components';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import color from '../Styles/Color';
import { SearchResults } from '../Components/SearchResult';

//  TODO Suchscreen Innenleben

class Suche extends Component {
  static navigationOptions = {
    title: 'Suche',
  };

  _showProduct = () => {
    this.props.navigation.navigate('Product');
  };

  render() {
    const rows = [];
    for (let i = 0; i < 14; i++) {
      rows.push(
        <TouchableOpacity onPress={this._showProduct} key={i}>
          <SearchResults
            title="Endrohr"
            image={require('../../assets/Endrohr.jpg')}
          />
        </TouchableOpacity>
      );
    }
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
        <SearchContent>{rows}</SearchContent>
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
const SearchContent = styled.ScrollView``;
