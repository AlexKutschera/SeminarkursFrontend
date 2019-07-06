/*
 * Copyright (c) 2019
 */

import React, { Component } from "react";
import { Dimensions, LayoutAnimation, PanResponder, Platform, StyleSheet, TouchableOpacity, View } from "react-native";

import Icon from "react-native-ionicons";
import color from "../Styles/Color";
import { store } from "../App";
import { setPopupCollapse } from "../actions/state";

const MARGIN_TOP = Platform.OS === 'ios' ? 20 : 0;
const DEVICE_HEIGHT = Dimensions.get('window').height - MARGIN_TOP;
type Props = {
  hasRef?: () => void,
  swipeHeight?: number,
  itemMini?: object,
  itemFull: object,
  disablePressToShow?: boolean,
  style?: object,
  onShowMini?: () => void,
  onShowFull?: () => void,
  animation?: 'linear' | 'spring' | 'easeInEaseOut' | 'none',
};

const getTouchPosition = ({ moveY }) => {
  if (store.getState().state.popup_collapsed) {
    return true;
  }
  if (!store.getState().state.popup_collapsed && moveY < 40) {
    return true;
  }
};

export default class SwipeUpDown extends Component<Props> {
  static defautProps = {
    disablePressToShow: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      iconDown: false,
    };
    this.disablePressToShow = props.disablePressToShow;
    this.SWIPE_HEIGHT = props.swipeHeight || 60;
    this._panResponder = null;
    this.top = this.SWIPE_HEIGHT;
    this.height = this.SWIPE_HEIGHT;
    this.customStyle = {
      style: {
        bottom: 0,
        top: this.top,
        height: this.height,
      },
    };
    this.checkCollapsed = true;
    this.showFull = this.showFull.bind(this);
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (event, gestureState) =>
        getTouchPosition(gestureState),
      onPanResponderMove: this._onPanResponderMove.bind(this),
      onPanResponderRelease: this._onPanResponderRelease.bind(this),
      onPanResponderTerminationRequest: (evt, gestureState) => true,
    });
  }

  componentDidMount() {
    this.props.hasRef && this.props.hasRef(this);
    this.setState({
      mounted: true,
    });
  }

  updateNativeProps() {
    switch (this.props.animation) {
      case 'linear':
        LayoutAnimation.linear();
        break;
      case 'spring':
        LayoutAnimation.spring();
        break;
      case 'easeInEaseOut':
        LayoutAnimation.easeInEaseOut();
        break;
      case 'none':
      default:
        break;
    }
    this.viewRef.setNativeProps(this.customStyle);
  }

  _onPanResponderMove(event, gestureState) {
    if (gestureState.dy > 0 && !this.checkCollapsed) {
      // SWIPE DOWN

      this.customStyle.style.top = this.top + gestureState.dy;
      this.customStyle.style.height = DEVICE_HEIGHT - gestureState.dy;
      this.setState({ iconDown: false });
      !this.state.collapsed && this.setState({ collapsed: true });
      setPopupCollapse(true);
      this.updateNativeProps();
    } else if (this.checkCollapsed && gestureState.dy < -60) {
      // SWIPE UP
      this.top = 0;
      this.customStyle.style.top = DEVICE_HEIGHT + gestureState.dy;
      this.customStyle.style.height = -gestureState.dy + this.SWIPE_HEIGHT;

      this.setState({ iconDown: false });
      if (this.customStyle.style.top <= DEVICE_HEIGHT / 2) {
        this.setState({
          iconDown: false,
        });
      }
      this.updateNativeProps();
      this.state.collapsed && this.setState({ collapsed: false });
      setPopupCollapse(false);
    } else if (this.checkCollapsed && gestureState.dy) {
      this.customStyle.style.top =
        DEVICE_HEIGHT - this.SWIPE_HEIGHT + gestureState.dy;
      this.customStyle.style.height = DEVICE_HEIGHT - gestureState.dy;
      this.setState({ iconDown: false });
      !this.state.collapsed && this.setState({ collapsed: true });
      setPopupCollapse(true);
      this.updateNativeProps();
    }
  }

  _onPanResponderRelease(event, gestureState) {
    if (gestureState.dy < -100 || gestureState.dy < 100) {
      this.showFull();
    } else if (
      (gestureState.dy > this.SWIPE_HEIGHT - 100 && this.state.collapsed) ||
      gestureState.dy > DEVICE_HEIGHT - this.SWIPE_HEIGHT + 100
    ) {
      this.props.handleIsRead(false);
    } else {
      this.showMini();
    }
  }

  showFull() {
    const { onShowFull } = this.props;
    this.customStyle.style.top = 0;
    this.customStyle.style.height = DEVICE_HEIGHT;
    this.setState({ iconDown: true });
    this.updateNativeProps();
    this.state.collapsed && this.setState({ collapsed: false });
    this.checkCollapsed = false;
    onShowFull && onShowFull();
  }

  showMini() {
    const { onShowMini, itemMini } = this.props;
    this.SWIPE_HEIGHT = 250; // Avoid hiding when swiping down.
    this.customStyle.style.top = itemMini
      ? DEVICE_HEIGHT - this.SWIPE_HEIGHT
      : DEVICE_HEIGHT;
    this.customStyle.style.height = itemMini ? this.SWIPE_HEIGHT : 0;
    this.updateNativeProps();
    this.setState({ iconDown: false });
    !this.state.collapsed && this.setState({ collapsed: true });
    this.checkCollapsed = true;
    onShowMini && onShowMini();
  }

  render() {
    const { itemMini, itemFull, style } = this.props;
    const { collapsed, iconDown } = this.state;
    const bg = collapsed ? color.white : color.gray09;
    return (
      <View
        ref={ref => (this.viewRef = ref)}
        {...this._panResponder.panHandlers}
        style={[
          styles.wrapSwipe,
          {
            height: this.SWIPE_HEIGHT,
            marginTop: MARGIN_TOP,
            backgroundColor: bg,
          },
          !itemMini &&
            collapsed &&
            {
              /* marginBottom: -200 */
            },
          style,
        ]}
      >
        {iconDown && (
          <View style={{ alignItems: 'center', marginTop: -4 }}>
            <Icon
              name="ios-arrow-down"
              /* style={{
              width: 35,
              height: this.state.icon === 'md-remove' ? 5 : 10,
            }} */
            />
          </View>
        )}

        {collapsed ? (
          itemMini ? (
            <TouchableOpacity
              activeOpacity={this.disablePressToShow ? 1 : 0.6}
              style={{
                height: this.SWIPE_HEIGHT,
                backgroundColor: color.white,
              }}
              onPress={() => !this.disablePressToShow && this.showFull()}
            >
              {itemMini}
            </TouchableOpacity>
          ) : null
        ) : (
          itemFull
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapSwipe: {
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
