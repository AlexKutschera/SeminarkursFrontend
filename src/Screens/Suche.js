import React, { Component } from 'react';
import { Container } from 'native-base';
import { DefaultHeader } from '../Components';

//  TODO Suchscreen Innenleben

class Suche extends Component {
  static navigationOptions = {
    title: 'Suche',
  };

  render() {
    return (
      <Container>
        <DefaultHeader title="Suche" navigation={this.props.navigation} />
      </Container>
    );
  }
}

export { Suche };
