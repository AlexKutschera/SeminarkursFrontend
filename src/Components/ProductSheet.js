import React, { Component } from 'react';
import SwipeUpDown from 'react-native-swipe-up-down';
import { Button, View, Text } from 'native-base';
import color from '../Styles/Color';
import { Product } from '../Screens/Product';
import { ProductCard } from './ProductCard';

class ProductSheet extends Component {
  pressHandler() {
    this.props.func();
  }

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
        itemFull={<Product />}
        disablePressToShow={false}
        swipeHeight={250} // Default 60
        animation="spring"
        style={{ padding: 0, paddingTop: 10, backgroundColor: color.gray09 }}
      />
    );
  }
}
export { ProductSheet };

// https://codedaily.io/tutorials/64/Create-a-Custom-Animated-Bottom-Action-Sheet-without-Measuring-in-React-Native
