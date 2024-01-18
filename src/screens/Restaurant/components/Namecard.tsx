import {View, Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

type PropsType = {
  name: string;
};

const Card = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: #f7f8f9;
  padding: 20px 10px;
  border-radius: 15px 10px;
  width: 150px;
  shadow-color: grey;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.5;
  shadow-radius: 4px;
  elevation: 8;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
`;

const HeadingText = styled.Text`
  font-size: 26px;
  line-height: 34px;
  font-family: Urbanist-SemiBold;
  color: grey;
`;

const SubHeadingText = styled.Text`
  font-size: 16px;
  font-family: Urbanist-SemiBold;
  line-height: 24px;
  color: black;
  margin-top: 5px;
`;

const Namecard = ({name}: PropsType) => {
  return (
    <Card>
      <HeadingText>{name}</HeadingText>
      <SubHeadingText>{"Let's Explore this evening."}</SubHeadingText>
    </Card>
  );
};

export default Namecard;
