/*
 * Copyright (c) 2019
 */

import React, { Component } from "react";
import { View } from "native-base";
import { connect } from "react-redux";
import SwipeUpDown from "./SwipeUpDown";
import { Product } from "../Screens/Product";
import { ProductCard } from "./ProductCard";
import { hideResult } from "../actions/scanner";

class ProductSheet extends Component {
  render() {
    return this.props.scan_result !== null ? (
      <SwipeUpDown
        hasRef={ref => (this.swipeUpDownRef = ref)}
        itemMini={
          <ProductCard
            modal
            name={this.props.scan_result.Art_Bez}
            id={this.props.scan_result.ARTIKEL_ID}
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
        swipeHeight={250} // Default 60cd
        animation="spring"
        style={{ padding: 0, paddingTop: 10 }}
        handleIsRead={hideResult}
      />
    ) : (
      <View />
    );
  }
}

const mapStateToProps = state => ({
  scan_result: state.scanner.scan_result,
});

const ProductSheetWithRedux = connect(
  mapStateToProps,
  {}
)(ProductSheet);

export { ProductSheetWithRedux as ProductSheet };

// https://codedaily.io/tutorials/64/Create-a-Custom-Animated-Bottom-Action-Sheet-without-Measuring-in-React-Native
