/*
 * Copyright (c) 2019
 */

import React, { Component } from "react";
import { Dimensions, StyleSheet } from "react-native";
import Pdf from "react-native-pdf";
import { store } from "../App";

class Datenblatt extends Component {
  static navigationOptions = {
    title: 'Datenblatt',
  };

  render() {
    if (store.getState().scanner.scan_result === null) {
      this.props.navigation.navigate('Scanner');
    }
    const source = {
      uri: `https://seminarkurs.alexkutschera.de/pdf/${
        store.getState().scanner.scan_result.ARTIKEL_ID
      }?session_id=${store.getState().user.session_id}`,
      cache: true,
    };
    return <Pdf source={source} style={styles.pdf} />;
  }
}

export { Datenblatt };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
});
