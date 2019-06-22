/*
 * Copyright (c) 2019
 */

import React, { Component } from "react";
import styled from "styled-components";
import Icon from "react-native-ionicons";
import { ScrollView } from "react-native-gesture-handler";
import color from "../Styles/Color";
import { Comment, ProductCard } from "../Components";
import { connect } from "react-redux";

class Product extends Component {
  static navigationOptions = {
    title: 'Product',
  };

  constructor(props) {
    super(props);
    this.state = {
      isModal: this.props.modal, // for use in the Scanner PopUp
    };
  }

  // TODO Rerender Comments on change of ProductCard
  render() {
    const marginModal = this.state.isModal ? 0 : 16;
    return (
      <Container>
        <ScrollView style={{ paddingTop: marginModal }}>
          <ProductCard
            modal={false}
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
          {this.state.isModal && (
            <CommentSection>
              <Header>
                <Title>Kommentare</Title>
                <CommentCount>2</CommentCount>
              </Header>
              <ChatBar>
                <Avatar source={require('../../assets/Avatar.jpg')} />
                <MessageInput placeholder="Kommentar hinzufügen" />
                <SendButton>
                  <SendIcon name="send" size={24} />
                </SendButton>
              </ChatBar>
              <Comment
                name="Wyatt Morris"
                abteilung="Student IT"
                date="09.04.19 12:45"
                text="Das Foto ist nicht mehr up-to-date"
                replies={[
                  {
                    name: 'Johanna Wu',
                    abteilung: 'Student IT',
                    date: '09.04.19 12:45',
                    text: 'Das Foto ist nicht mehr up-to-date',
                  },
                ]}
              />
            </CommentSection>
          )}
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  scan_result: state.scanner.scan_result
});

const ProductWithRedux = connect(
  mapStateToProps,
  {}
)(Product);

export { ProductWithRedux as Product };

const Container = styled.View`
  background-color: ${color.gray09};
  flex: 1;
`;

const CommentSection = styled.View`
  margin-left: 24;
  margin-right: 24;
  margin-top: 24;
`;
const Header = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
const Title = styled.Text`
  font-size: 16;
  line-height: 24;
  color: ${color.gray01};
`;
const CommentCount = styled.Text`
  width: 18;
  height: 18;
  text-align: center;
  text-align-vertical: center;
  background: ${color.teal09};
  border-radius: 10;
  font-size: 12;
  line-height: 16;
  color: ${color.teal04};
  margin-left: 8;
`;
const ChatBar = styled.View`
  background-color: ${color.white};
  margin-top: 12;
  margin-bottom: 8;
  border-radius: 26;
  max-height: 50;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  elevation: 1;
`;
const Avatar = styled.Image`
  width: 32;
  height: 32;
  border-radius: 28;
  border-width: 1;
  border-color: rgba(0, 0, 0, 0.2);
  margin-left: 9;
`;
const SendButton = styled.TouchableOpacity`
  elevation: 0;
  background-color: ${color.blue03};
  align-self: stretch;
  border-top-right-radius: 26px;
  border-bottom-right-radius: 26px;
  max-width: 50;
  height: 48;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const SendIcon = styled(Icon)`
  color: ${color.gray10};
`;
const MessageInput = styled.TextInput`
  font-size: 16;
  margin-right: auto;
  margin-left: 8;
`;
/* const Comment = styled.View`
  margin-top: 8;
  padding-top: 8;
  padding-bottom: 8;
  padding-left: 12;
  padding-right: 12;
  background-color: ${color.white};
  border-radius: 4;
`; */
const CommentHead = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
const CommentAvatar = styled.Image`
  width: 46;
  height: 46;
  border-radius: 46;
  border-width: 1;
  border-color: rgba(0, 0, 0, 0.2);
`;
const CommentHeadText = styled.View`
  flex: 1;
  margin-left: 8;
`;
const CommentName = styled.Text`
  font-size: 16;
  line-height: 16;
  color: ${color.gray04};
`;
const CommentAbteilung = styled.Text`
  font-size: 12;
  line-height: 12;
  color: ${color.gray05};
`;
const CommentText = styled.Text`
  font-size: 14;
  line-height: 20;
  color: ${color.gray04};
  margin-top: 8;
`;
const Date = styled.Text`
  align-self: flex-start;
  font-size: 12;
  line-height: 12;
  color: ${color.gray07};
`;
const ReplyButton = styled.TouchableOpacity`
  margin-left: auto;
`;
const ReplyButtonText = styled.Text`
  font-size: 12;
  line-height: 12;
  font-weight: bold;
  letter-spacing: 1.25;
  text-transform: uppercase;
  color: ${color.gray06};
`;
