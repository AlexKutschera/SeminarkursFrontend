import React, { Component } from 'react';
import { Button, View, Text } from 'native-base';
import { PanResponder } from 'react-native';
import SwipeUpDown from './SwipeUpDown';
import color from '../Styles/Color';
import { Product } from '../Screens/Product';
import { ProductCard } from './ProductCard';

class ProductSheet extends Component {
  render() {
    return (
      <SwipeUpDown
        hasRef={ref => (this.swipeUpDownRef = ref)}
        itemMini={
          <ProductCard
            modal
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
        }
        itemFull={<Product modal />}
        disablePressToShow={false}
        swipeHeight={250} // Default 60
        animation="spring"
        style={{ padding: 0, paddingTop: 10 }}
        handleIsRead={this.props.handleIsRead}
      />
    );
  }
}
export { ProductSheet };

// https://codedaily.io/tutorials/64/Create-a-Custom-Animated-Bottom-Action-Sheet-without-Measuring-in-React-Native
