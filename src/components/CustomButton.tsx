import React from 'react';
import styled from 'styled-components/native';

interface ButtonProps {
  styles?: string;
  disabled?: boolean;
}

const Wrapper = styled.TouchableOpacity<ButtonProps>`
  active-opacity: ${props => (props.disabled ? '1px' : '0.7px')};
`;
const Button = styled.View<ButtonProps>`
  background-color: ${props => (props.disabled ? 'grey' : '#ff6d6a')};
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  height: 56px;
  width: 330px;
  margin: 15px 0px;
  ${props => props.styles}
`;
const Label = styled.Text`
  font-family: Urbanist-SemiBold;
  font-size: 15px;
  color: #ffffff;
`;

type PropsType = {
  label: string;
  onPress: () => void;
  styles?: string;
  disabled?: boolean;
};

const CustomButton = ({
  label,
  onPress,
  styles,
  disabled = false,
}: PropsType) => {
  return (
    <Wrapper disabled={disabled} onPress={disabled ? () => {} : onPress}>
      <Button disabled={disabled} styles={styles}>
        <Label>{label}</Label>
      </Button>
    </Wrapper>
  );
};

export default CustomButton;
