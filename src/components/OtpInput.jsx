import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex-direction: row;
`;

const TextInput = styled.TextInput`
  border-width: 1px;
  border-color: #e8ecf4;
  background-color: #f7f8f9;
  width: 50px;
  height: 60px;
  text-align: center;
  margin: 5px;
  border-radius: 10px;
`;

const OtpInput = ({length = 4, onOtpSubmit = otp => otp}) => {
  const [otp, setOtp] = useState(new Array(length).fill(''));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, value) => {
    if (isNaN(value)) {
      return;
    }

    const newOtp = [...otp];
    // allow only one input
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if current field is filled
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }

    const combinedOtp = newOtp.join('');
    onOtpSubmit(combinedOtp);
  };

  const handleKeyDown = (index, e) => {
    if (
      e.nativeEvent.key === 'Backspace' &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <Wrapper>
      {otp.map((value, index) => (
        <TextInput
          key={index}
          ref={input => (inputRefs.current[index] = input)}
          keyboardType="numeric"
          value={value}
          maxLength={1}
          onChangeText={text => handleChange(index, text)}
          onKeyPress={nativeEvent => handleKeyDown(index, nativeEvent)}
        />
      ))}
    </Wrapper>
  );
};

export default OtpInput;
