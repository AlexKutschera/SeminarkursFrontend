import React, { Component } from "react";
import { connect } from "react-redux";
import { Login } from "./Login";
import { Profile } from "./Profile";

class AuthLoadingScreen extends Component {
  render() {
    return this.props.session_id === null ||
      this.props.session_id === undefined ||
      this.props.session_id === '' ? (
      <Login />
    ) : (
      <Profile />
    );
  }
}

const mapStateToProps = state => ({
  session_id: state.user.session_id,
});

const AuthLoadingScreenWithRedux = connect(
  mapStateToProps,
  {}
)(AuthLoadingScreen);

export { AuthLoadingScreenWithRedux as AuthLoadingScreen };
