import React, { Component } from "react";
import styled from "styled-components";
import color from "../Styles/Color";

class SearchResults extends Component {
  render() {
    return (
      <Container>
        <ProductHeader>
          <ProductImage source={this.props.image} />
          <ProductTitle>{this.props.title}</ProductTitle>
        </ProductHeader>
        {/*
        <ProductTable>
          <TableGroup>
            <TableHeading>Gruppe</TableHeading>
            <TableData>8</TableData>
          </TableGroup>
          <TableGroup>
            <TableHeading>Teil</TableHeading>
            <TableData>888</TableData>
          </TableGroup>
          <TableGroup>
            <TableHeading>Reihe</TableHeading>
            <TableData>8888</TableData>
          </TableGroup>
        </ProductTable> */}
      </Container>
    );
  }
}
export { SearchResults };

const Container = styled.View`
  border-top-width: 1;
  border-top-color: ${color.gray09};

  height: 72;
  background-color: ${color.white};
  flex: 1;
  flex-direction: row;
  padding-left: 32;
  padding-right: 20;
  align-items: center;
`;
const ProductHeader = styled.View`
  flex: 1;
  flex-direction: row;
`;
const ProductImage = styled.Image`
  height: 48;
  width: 48;
  border-radius: 48;
  border-width: 1;
  border-color: rgba(0, 0, 0, 0.2);
`;
const ProductTitle = styled.Text`
  margin-left: 18;
  text-align-vertical: center;
  font-size: 16;
  line-height: 24;
  letter-spacing: 0.15;
  color: ${color.gray01};
`;
const ProductTable = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;
const TableHeading = styled.Text`
  font-size: 12;
  line-height: 16;
  letter-spacing: 0.4;
  color: ${color.gray05};
`;
const TableGroup = styled.View`
  flex: 1;
  flex-direction: column;
`;
const TableData = styled.Text`
  font-size: 16;
  line-height: 28;
  letter-spacing: 0.44;
  color: ${color.gray02};
`;
