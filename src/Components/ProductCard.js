/*
 * Copyright (c) 2019
 */

import React, { Component } from "react";
import styled from "styled-components";
import Icon from "react-native-ionicons";
import { View } from "native-base";
import color from "../Styles/Color";
import { withNavigation } from "react-navigation";


class ProductCard extends Component {
  constructor(props) {
    super(props);
    // Name of the Icons which change on Expand/Collapse
    this.icons = {
      up: 'ios-arrow-up',
      down: 'ios-arrow-down',
    };
    // Text of the Expand/collapse Button
    this.collapseText = {
      collapsed: 'Mehr',
      expanded: 'Weniger',
    };

    this.state = {
      isExpanded: false,
      isModal: this.props.modal, // for use in the Scanner PopUp
    };
  }

  toggleHidden() {
    this.setState({
      isExpanded: !this.state.isExpanded, // Invert isExpanded
    });
  }

  render() {
    let collapse = this.collapseText.collapsed;
    let icon = this.icons.down;

    if (this.state.isExpanded) {
      // change Icon & Text based on state
      collapse = this.collapseText.expanded;
      icon = this.icons.up;
    }
    return (
      <Card modalStyle={this.state.isModal}>
        {!this.state.isModal ? (
          <OpenPDF
            onPress={() => {
              this.props.navigation.navigate("Datenblatt");
            }}
          >
            <PDFLinkText>Datenblatt</PDFLinkText>
            <Icon name="open" color={color.gray08} size={16} />
          </OpenPDF>
        ) : (
          <View
            style={{
              backgroundColor: color.gray09,
              width: 48,
              height: 4,
              alignSelf: 'center',
              marginTop: 2,
              marginBottom: 16,
              borderRadius: 4,
            }}
          />
        )}

        <Header>
          <ProductTitle>
            <ProductName>{this.props.name}</ProductName>
            <ProductID>#{this.props.id}</ProductID>
          </ProductTitle>
          <ProductImage source={this.props.image} />
        </Header>
        <Information>
          <InformationTitle>Information</InformationTitle>
          <ProductTable>
            <ProductTableGroup>
              <ProductTableHeading>Gruppe</ProductTableHeading>
              <ProductTableData>{this.props.gruppe}</ProductTableData>
            </ProductTableGroup>
            <ProductTableGroup>
              <ProductTableHeading>Teil</ProductTableHeading>
              <ProductTableData>{this.props.teil}</ProductTableData>
            </ProductTableGroup>
            <ProductTableGroup>
              <ProductTableHeading>Reihe</ProductTableHeading>
              <ProductTableData>{this.props.reihe}</ProductTableData>
            </ProductTableGroup>
          </ProductTable>
          {this.state.isExpanded && (
            <ExtendedProductTable>
              <ExtendedTableRow>
                <ExtendedTableGroup>
                  <ExtendedTableHeader>
                    <HeaderIcon name="cube" color={color.gray08} size={12} />
                    <ExtendedTableHeading>Material</ExtendedTableHeading>
                  </ExtendedTableHeader>
                  <ExtendedTableData>{this.props.material}</ExtendedTableData>
                </ExtendedTableGroup>
                <ExtendedTableGroup>
                  <ExtendedTableHeader>
                    <HeaderIcon name="person" color={color.gray08} size={12} />
                    <ExtendedTableHeading>Kunde</ExtendedTableHeading>
                  </ExtendedTableHeader>
                  <ExtendedTableData>{this.props.kunde}</ExtendedTableData>
                </ExtendedTableGroup>
                <ExtendedTableGroup>
                  <ExtendedTableHeader>
                    <HeaderIcon
                      name="calendar"
                      color={color.gray08}
                      size={12}
                    />
                    <ExtendedTableHeading>Erstellt</ExtendedTableHeading>
                  </ExtendedTableHeader>
                  <ExtendedTableData>{this.props.erstellung}</ExtendedTableData>
                </ExtendedTableGroup>
              </ExtendedTableRow>
              <ExtendedTableRow>
                <ExtendedTableGroup>
                  <ExtendedTableHeader>
                    <HeaderIcon
                      name="speedometer"
                      color={color.gray08}
                      size={12}
                    />
                    <ExtendedTableHeading>Gewicht</ExtendedTableHeading>
                  </ExtendedTableHeader>
                  <ExtendedTableData>{this.props.gewicht}</ExtendedTableData>
                </ExtendedTableGroup>
                <ExtendedTableGroup>
                  <ExtendedTableHeader>
                    <HeaderIcon name="cart" color={color.gray08} size={12} />
                    <ExtendedTableHeading>Zulieferer</ExtendedTableHeading>
                  </ExtendedTableHeader>
                  <ExtendedTableData>{this.props.zulieferer}</ExtendedTableData>
                </ExtendedTableGroup>
                <ExtendedTableGroup>
                  <ExtendedTableHeader>
                    <HeaderIcon name="time" color={color.gray08} size={12} />
                    <ExtendedTableHeading>
                      Zuletzt gescannt
                    </ExtendedTableHeading>
                  </ExtendedTableHeader>
                  <ExtendedTableData>
                    {this.props.letzterScan}
                  </ExtendedTableData>
                </ExtendedTableGroup>
              </ExtendedTableRow>
            </ExtendedProductTable>
          )}
        </Information>
        {!this.state.isModal && (
          <Collapse onPress={this.toggleHidden.bind(this)}>
            <CollapseText>{collapse}</CollapseText>
            <Icon name={icon} color={color.gray08} size={12} />
          </Collapse>
        )}
      </Card>
    );
  }
}

const ProductCardWithNavigation = withNavigation(ProductCard);

export { ProductCardWithNavigation as ProductCard };
const Card = styled.View`
  background-color: ${color.white};
  border-radius: 12;
  margin-left: 16;
  margin-right: 16;
  elevation: ${props => (props.modalStyle ? '0' : '2')};
  padding-left: 24;
  padding-right: 24;
  min-height: ${props => (props.modalStyle ? '200' : '0')};
  padding-bottom: ${props => (props.modalStyle ? '40' : '0')};
`;

const OpenPDF = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 12;
`;

const PDFLinkText = styled.Text`
  margin-right: 4;
  font-size: 12;
  line-height: 16;
  color: ${color.gray07};
`;

const Header = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 4;
`;

const ProductTitle = styled.View`
  max-width: 75%;
`;

const ProductName = styled.Text`
  font-size: 20;
  line-height: 24;
  font-weight: bold;
  color: ${color.gray01};
`;

const ProductID = styled.Text`
  font-size: 12;
  line-height: 16;
  letter-spacing: 1.5;
  text-transform: uppercase;
  color: ${color.gray05};
  margin-top: -2;
`;
const ProductImage = styled.Image`
  width: 64;
  height: 64;
  border-radius: 64;
  border-width: 1;
  border-color: rgba(0, 0, 0, 0.2);
`;
const Information = styled.View`
  margin-top: 16;
`;
const InformationTitle = styled.Text`
  font-size: 16;
  line-height: 24;
  color: ${color.gray01};
`;
const ProductTable = styled.View`
  flex: 1;
  margin-top: 4;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 32;
`;
const ProductTableHeading = styled.Text`
  font-size: 12;
  line-height: 16;
  letter-spacing: 0.4;
  color: ${color.gray05};
`;
const ProductTableGroup = styled.View`
  flex: 1;
  flex-direction: column;
`;
const ProductTableData = styled.Text`
  font-size: 18;
  line-height: 24;
  letter-spacing: 0.44;
  color: ${color.gray02};
`;
const ExtendedProductTable = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
`;
const ExtendedTableRow = styled.View``;
const ExtendedTableHeading = styled.Text`
  font-size: 12;
  line-height: 16;
  letter-spacing: 0.4;
  color: ${color.gray05};
`;
const ExtendedTableGroup = styled.View`
  flex: 1;
  flex-direction: column;
  margin-bottom: 8;
`;
const ExtendedTableData = styled.Text`
  font-size: 14;
  font-weight: bold;
  line-height: 24;
  letter-spacing: 0.44;
  color: ${color.gray04};
  margin-left: 14;
`;
const ExtendedTableHeader = styled.View`
  flex: 1;
  flex-direction: row;
`;

const HeaderIcon = styled(Icon)`
  margin-right: 4;
  text-align-vertical: center;
`;
const Collapse = styled.TouchableOpacity`
  margin-bottom: 12;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const CollapseText = styled.Text`
  color: ${color.gray07};
  font-size: 14;
  line-height: 16;
  font-weight: bold;
  letter-spacing: 1.35;
  text-transform: uppercase;
  margin-right: 4;
`;
