import React, { Component } from 'react';
import styled from 'styled-components';
import Icon from 'react-native-ionicons';
import color from '../Styles/Color';
import { ProductCard } from '../Components';

class Product extends Component {
  static navigationOptions = {
    title: 'Product',
  };

  render() {
    return (
      <Container>
        <Content>
          <TopBar>
            <TopText>Details</TopText>
            <Icon name="ios-arrow-down" color={color.gray09} size={20} />
          </TopBar>
          <ProductCard
            modal={false}
            name="Endrohr"
            id="00000000001"
            image={require('../../assets/Endrohr.jpg')}
            gruppe="8"
            teil="888"
            reihe="8888"
            material="Aluminium"
            kunde="BMW"
            erstellung="19.05.19"
            gewicht="550g"
            zulieferer="Alu BW"
            letzterScan="19.06.19 18:55"
          />
        </Content>
      </Container>
    );
  }
}

export { Product };

const TopBar = styled.View`
  margin-top: 16;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`;

const TopText = styled.Text`
  font-size: 14;
  letter-spacing: 1.35;
  font-weight: bold;
  text-transform: uppercase;
  color: ${color.gray08};
  margin-bottom: -4;
`;
const Container = styled.View`
  background-color: ${color.gray10};
  flex: 1;
`;

const Content = styled.ScrollView``;
