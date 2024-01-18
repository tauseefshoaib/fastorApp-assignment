import {KeyboardTypeOptions, View} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const TextInput = styled.TextInput`
  border: 1px #dadada;
  background-color: #f7f8f9;
  height: 56px;
  width: 330px;
  border-radius: 10px;
  padding: 5px 15px;
  margin: 15px 0px;
  font-family: Urbanist-Regular;
  letter-spacing: 1px;
`;

type PropsType = {
  placeHolder: string;
  value: string;
  onChangeText: (text: string) => void;
  KeyboardType?: KeyboardTypeOptions;
};

const CustomInput = ({
  placeHolder,
  value,
  onChangeText,
  KeyboardType,
}: PropsType) => {
  return (
    <View>
      <TextInput
        placeholder={placeHolder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={KeyboardType}
      />
    </View>
  );
};

export default CustomInput;
