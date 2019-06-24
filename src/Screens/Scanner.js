/*
 * Copyright (c) 2019
 */

import React, { Component } from "react";
import { Container, Text } from "native-base";
import { RNCamera } from "react-native-camera";
import styled from "styled-components";
import Icon from "react-native-ionicons";
import { Dimensions } from "react-native";
import { withNavigationFocus } from "react-navigation";
import { ProductSheet } from "../Components";
import { connect } from "react-redux";
import { loadScannerData } from "../actions/scanner";

// TODO Flashmode Button
// TODO Permission Prompt
type Props = {};

class Scanner extends Component<Props> {
  static navigationOptions = {
    title: "Scanner"
  };

  socket = null;

  constructor(props) {
    super(props);
    this.handleIsRead = this.handleIsRead.bind(this);
    this.state = {
      code: null,
      flash: false
    };
  }

  // componentDidMount(){
  //   setTimeout(() => {
  //     this.loadItemData(1);
  //   });
  // }

  componentDidUpdate() {
    if (!this.props.show_result && this.state.code !== null) {
      this.setState({
        code: null
      });
    }
  }

  _showSuche = () => {
    this.props.navigation.navigate("Suche");
  };

  _toggleFlash = () => {
    this.setState({
      flash: !this.state.flash
    });
    console.log(this.state.flash);
  };

  handleIsRead(value) {
    this.setState({ isRead: value });
  }

  loadItemData(code) {
    console.log(code);
    if (code !== this.state.code) {
      loadScannerData(code);
      this.setState({
        code: code
      });
    }
  }

  render() {
    return (
      <Container>
        {this.props.isFocused && (
          <RNCamera
            flashMode={
              this.state.flash
                ? RNCamera.Constants.FlashMode.torch
                : RNCamera.Constants.FlashMode.off
            }
            ref={ref => {
              this.camera = ref;
            }}
            style={{
              flex: 1
            }}
            onBarCodeRead={data => this.loadItemData(data.data)}
            captureAudio={false}
          />
        )}
        <Toolbar>
          <SearchButton onPress={this._showSuche}>
            <StyledIcon name="search"/>
          </SearchButton>
          <Text>{this.props.is_online ? "Verbunden" : "Nicht verbunden"} | {(this.props.session_id === null ||
            this.props.session_id === undefined ||
            this.props.session_id === "") ? "Nicht angemeldet" : "Angemeldet"}</Text>
          <SearchButton onPress={this._toggleFlash}>
            {this.state.flash ? <StyledIcon name="flash"/> : <StyledIcon name="flash-off"/>}
          </SearchButton>
        </Toolbar>
        {this.props.show_result && <Popup handleIsRead={this.handleIsRead}/>}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  show_result: state.scanner.show_result,
  scan_result: state.scanner.scan_result,
  is_online: state.state.is_online,
  session_id: state.user.session_id
});

const ScannerWithNavigationFocus = withNavigationFocus(Scanner);
const ScannerWithRedux = connect(mapStateToProps, {})(ScannerWithNavigationFocus);

export { ScannerWithRedux as Scanner };

const Popup = styled(ProductSheet)`
  width: ${Dimensions.get("window").width};
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 999;
  height: 200;
`;
const Toolbar = styled.View`
  width: ${Dimensions.get("window").width};
  position: absolute;
  left: 0;
  top: 32;
  height: 32;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledIcon = styled(Icon)`
  text-align: center;
  text-align-vertical: center;
`;
const SearchButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 42;
  background-color: rgba(255, 255, 255, 0.25);
  max-width: 42;
  height: 42;
  margin-left: 24;
  margin-right: 24;
`;
