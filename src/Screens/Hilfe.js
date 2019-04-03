import React, { Component } from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Text,
  Icon,
  Content,
  Grid,
  Col,
  Row
} from 'native-base';
import { StyleSheet, View } from 'react-native';
import { DefaultHeader, DefaultFooter } from '../Components';

class Hilfe extends Component {
  static navigationOptions = {
    title: 'Hilfe',
  };

  render() {
    return (
      <Container>
        <DefaultHeader title="Hilfe" navigation={this.props.navigation} />
        <Content
          contentContainerStyle={{
            justifyContent: 'center',
            flexDirection: 'column',
            flex: 1,
          }}
        >
          <View style={{ flex: 3 }} />
          <Grid style={{ flex: 6 }}>
            <Row style={{ alignItems: 'flex-end' }}>
              <Col style={{ flex: 1 }}>
                <Title
                  style={{
                    alignSelf: 'flex-start',
                    marginLeft: 30,
                    color: 'black',
                  }}
                >
                  Thema
                </Title>
              </Col>
            </Row>
            <Row style={{ flex: 5 }}>
              <Col style={{ alignItems: 'center', justifyItems: 'center' }}>
                <Button large style={styles.button}>
                  <Text style={styles.text}>App</Text>
                </Button>
              </Col>
              <Col>
                <Button large style={styles.button}>
                  <Text style={styles.text}>Produkt</Text>
                </Button>
              </Col>
              <Col>
                <Button large style={styles.button}>
                  <Text style={styles.text}>Sonstiges</Text>
                </Button>
              </Col>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    height: 100,
    width: 100,
    textAlign: 'center',
  },
  text: {
    fontSize: 12,
    color: 'black',
  },
});

export { Hilfe };
