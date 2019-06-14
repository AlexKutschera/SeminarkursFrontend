import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Animated } from 'react-native';
import styled from 'styled-components';
import color from '../Styles/Color';

const SIZE = 64;

class ProductSheet extends Component {
  render() {
    return (
      <Sheet>
        <Popup as={Animated.View}>
          <TouchableOpacity>
            <Text>Close</Text>
          </TouchableOpacity>
        </Popup>
      </Sheet>
    );
  }
}
export { ProductSheet };

const Sheet = styled.View`
  width: ${SIZE};
  height: ${SIZE};
  background: ${color.blue05};
  border-radius: 58;
  margin-bottom: 48;
  display: flex;
  align-items: center;
  justify-content: center;
  elevation: 6;
`;
const Popup = styled.View``;
// https://codedaily.io/tutorials/64/Create-a-Custom-Animated-Bottom-Action-Sheet-without-Measuring-in-React-Native
