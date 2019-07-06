import React, { Component } from "react";
import { Dimensions } from "react-native";
import { Button, Container, Content } from "native-base";
import styled from "styled-components";
import Icon from "react-native-ionicons";

import color from "../Styles/Color";
import { DefaultHeader } from "../Components";

const { width, height } = Dimensions.get('window');
class Chat extends Component {
  static navigationOptions = {
    title: 'Chat',
  };

  render() {
    return (
      <Background>
        <DefaultHeader title="Support" navigation={this.props.navigation} />
        <ChatContent>
          <MessageSend>
            <SendText>
              Hallo ich habe ein Problem mit dem Endrohr 8 559 226. Dieses lässt
              sich nicht einscannen.
            </SendText>
          </MessageSend>
          <MessageReceived>
            <ReceivedText>Danke. Wir kümmern uns darum</ReceivedText>
          </MessageReceived>
        </ChatContent>
        <ChatBar>
          <Avatar source={require('../../assets/Avatar.jpg')} />
          <MessageInput placeholder="Nachricht eingeben" />
          <SendButton iconLeft>
            <SendIcon name="send" size={24} />
          </SendButton>
        </ChatBar>
      </Background>
    );
  }
}

export { Chat };

const Background = styled(Container)`
  background-color: ${color.gray10};
`;
const ChatBar = styled.View`
  background-color: ${color.white};
  border-color: ${color.gray08};
  border-width: 1;
  margin-bottom: 40;
  margin-left: 20;
  margin-right: 20;
  border-radius: 26;
  max-height: 50;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  elevation: 2;
`;
const Avatar = styled.Image`
  width: 32;
  height: 32;
  border-radius: 28;
  border-width: 1;
  border-color: rgba(0, 0, 0, 0.2);
  margin-left: 9;
`;
const SendButton = styled(Button)`
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
const MessageSend = styled.View`
  border-top-left-radius: 16;
  border-top-right-radius: 16;
  border-bottom-left-radius: 16;
  background-color: ${color.blue05};
  padding-left: 16;
  padding-right: 16;
  padding-top: 8;
  padding-bottom: 8;
  align-self: flex-end;
  flex: 1;
  align-items: center;
  justify-content: center;
  max-width: ${width * 0.75};
  margin-bottom: 24;
  elevation: 1;
`;
const MessageReceived = styled.View`
  border-top-left-radius: 16;
  border-top-right-radius: 16;
  border-bottom-right-radius: 16;
  background-color: ${color.gray09};
  padding-left: 16;
  padding-right: 16;
  padding-top: 8;
  padding-bottom: 8;
  align-self: flex-start;
  max-width: ${width * 0.75};
  margin-bottom: 24;
  elevation: 1;
`;
const ReceivedText = styled.Text`
  font-size: 16;
  line-height: 22;
  color: ${color.blue03};
`;
const SendText = styled.Text`
  font-size: 16;
  line-height: 22;
  color: ${color.blue10};
`;
const ChatContent = styled(Content)`
  flex: 1;
  flex-direction: column;
  padding-left: 20;
  padding-right: 20;
  padding-top: 20;
`;
