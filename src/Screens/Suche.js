/*
 * Copyright (c) 2019
 */

import React, { Component } from "react";
import { Button, Container, Header, Input, Item } from "native-base";
import Icon from "react-native-ionicons";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import color from "../Styles/Color";
import { SearchResults } from "../Components/SearchResult";

//  TODO Suchscreen Innenleben

class Suche extends Component {
  static navigationOptions = {
    title: 'Suche',
  };

  state = {
    search: ""
  };

  _showProduct = articleID => () => {
    this.props.navigation.navigate('Product');
  };

  _searchProducts = data => {
    this.setState({
      search: data
    });
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
            <SearchInput
              placeholder="Search"
              value={this.state.search}
              onChangeText={this._searchProducts}
            />
          </SearchBar>
        </SearchHeader>
        <SearchContent>
          {this.props.search_articles.map((article, i) => (
            <TouchableOpacity onPress={this._showProduct(article)} key={i}>
              <SearchResults
                title="Endrohr"
                image={require("../../assets/Endrohr.jpg")}
              />
            </TouchableOpacity>
          ))}
        </SearchContent>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  search_articles: state.search.articles
});

const SucheWithRedux = connect(
  mapStateToProps,
  {}
)(Suche);

export { SucheWithRedux as Suche };

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
