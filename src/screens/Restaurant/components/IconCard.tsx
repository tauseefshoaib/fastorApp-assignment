import React from 'react';
import {ImageSourcePropType} from 'react-native';
import styled from 'styled-components/native';

type PropsType = {
  src: ImageSourcePropType;
  title: string;
};

const Wrapper = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Card = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f7f8f9;
  margin: 5px;
  height: 80px;
  width: 80px;
  border-radius: 15px 10px;
  shadow-color: grey;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.5;
  shadow-radius: 1px;
  elevation: 8;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
`;

const HeadingText = styled.Text`
  font-size: 12px;
  line-height: 34px;
  font-family: Urbanist-SemiBold;
  color: grey;
`;

const Icon = styled.Image`
  height: 40px;
  width: 40px;
`;

const IconCard = ({src, title}: PropsType) => {
  return (
    <Wrapper>
      <Card>
        <Icon source={src} />
      </Card>

      <HeadingText>{title}</HeadingText>
    </Wrapper>
  );
};

export default IconCard;
