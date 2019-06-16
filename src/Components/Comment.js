import React, { Component, View } from 'react';
import styled from 'styled-components';
import color from '../Styles/Color';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.replies = {
      hasReplies: !!this.props.replies, // hasReplies = true of Array of Replies is passed in
    };
    this.state = {
      isDeep: this.replies.hasReplies,
    };
  }

  render() {
    const repliesRow = [];
    function printReplies(obj) {
      repliesRow.push(
        <Wrapper>
          <CommentHead>
            <CommentAvatar source={require('../../assets/Avatar.jpg')} />
            <CommentHeadText>
              <CommentName>{obj.name}</CommentName>
              <CommentAbteilung>{obj.abteilung}</CommentAbteilung>
            </CommentHeadText>
            <Date>{obj.date}</Date>
          </CommentHead>
          <CommentText>
            {obj.text}
            {/* TODO Mehr anzeigen Knopf Comment Text */}
          </CommentText>
          <ReplyButton>
            <ReplyButtonText>Antworten</ReplyButtonText>
          </ReplyButton>
        </Wrapper>
      );
    }
    console.log(this.props.replies);
    if (this.replies.hasReplies) {
      const reply = this.props.replies;
      console.log(reply);
      reply.forEach(printReplies);
    }

    return (
      <Wrapper>
        <CommentHead>
          <CommentAvatar source={require('../../assets/Avatar.jpg')} />
          <CommentHeadText>
            <CommentName>{this.props.name}</CommentName>
            <CommentAbteilung>{this.props.abteilung}</CommentAbteilung>
          </CommentHeadText>
          <Date>{this.props.date}</Date>
        </CommentHead>
        <CommentText>
          {this.props.text}
          {/* TODO Mehr anzeigen Knopf Comment Text */}
        </CommentText>
        <ReplyButton>
          <ReplyButtonText>Antworten</ReplyButtonText>
        </ReplyButton>
        {repliesRow}
        {/* <Wrapper>
          <CommentHead>
            <CommentAvatar source={require('../../assets/Avatar.jpg')} />
            <CommentHeadText>
              <CommentName>Leo Gill</CommentName>
              <CommentAbteilung>Meister Schweißen</CommentAbteilung>
            </CommentHeadText>
            <Date>24.06.19 10:05</Date>
          </CommentHead>
          <CommentText>
            Das Foto ist nicht mehr up-to-date!
          </CommentText>
          <ReplyButton>
            <ReplyButtonText>Antworten</ReplyButtonText>
          </ReplyButton>
        </Wrapper> */}
      </Wrapper>
    );
  }
}
export { Comment };

const Wrapper = styled.View`
  margin-top: 8;
  padding-top: 8;
  padding-bottom: 8;
  padding-left: 12;
  padding-right: 12;
  background-color: ${color.white};
  border-radius: 8;
`;
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
  color: ${color.gray02};
`;
const CommentAbteilung = styled.Text`
  font-size: 14;
  line-height: 14;
  color: ${color.gray07};
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
