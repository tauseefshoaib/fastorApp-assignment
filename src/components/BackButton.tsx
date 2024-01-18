import React from 'react';
import styled from 'styled-components/native';
import {ImageSourcePropType} from 'react-native';

type PropsType = {
  onPress: () => void;
  styles?: string;
  src: ImageSourcePropType;
};

interface ButtonProps {
  styles?: string;
}

const Wrapper = styled.TouchableOpacity<ButtonProps>`
  border: 1px #e8ecf4;
  border-radius: 10px;
  background-color: #f7f8f9;
  justify-content: center;
  align-items: center;
  padding: 10px;
  ${props => props.styles}
`;

const Icon = styled.Image`
  height: 30px;
  width: 30px;
  tint-color: black;
`;

const BackButton = ({onPress, styles, src}: PropsType) => {
  return (
    <Wrapper styles={styles} onPress={onPress}>
      <Icon source={src} />
    </Wrapper>
  );
};

export default BackButton;
