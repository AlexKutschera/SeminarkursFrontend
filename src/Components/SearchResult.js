import React, { Component } from 'react';
import Icon from 'react-native-ionicons';
import styled from 'styled-components';
import color from '../Styles/Color';

class SearchResults extends Component {
  render() {
    return (
      <Container>
        <ProductImage src={{require('../../assets/Endrohr.jpg')}}
      </Container>
    );
  }
}
export { SearchResults };

const Container = styled.View`
  border-top-width: 1;
  border-top-color: ${color.gray09};
`;
