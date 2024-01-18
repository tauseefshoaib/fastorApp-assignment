import React, {useState} from 'react';
import styled, {css} from 'styled-components/native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import {apiRequest} from '../../services/api';
import {API_CONFIGS_URL} from '../../services/axiosConfig/constants';
import OtpInput from '../../components/OtpInput';
import BackButton from '../../components/BackButton';
import backIcon from '../../../assets/icons/back.png';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {actions as loginActions} from '../Login/loginSlice';
import {RegisterDetailsType} from '../Login/loginTypes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface TextProps {
  styles?: string;
}

const Wrapper = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const ButtonWrapper = styled.View`
  position: absolute;
  z-index: 1;
  top: 90px;
  left: 30px;
`;

const HeadingText = styled.Text<TextProps>`
  font-size: 26px;
  line-height: 34px;
  font-family: Urbanist-SemiBold;
  ${props => props.styles}
`;

const ResendTextWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const SubHeadingText = styled.Text<TextProps>`
  font-size: 16px;
  font-family: Urbanist-Regular;
  line-height: 24px;
  color: #8391a1;
  margin-top: 5px;
  ${props => props.styles}
`;

const TextWrapper = styled.View`
  margin: 20px 0px;
`;

const resendStyle = css`
  margin: 0px 5px;
  font-size: 15px;
`;
const blueText = css`
  color: #5574c6;
  font-size: 15px;
`;

const OtpScreen: React.FC = () => {
  const [otp, setOtp] = useState<number>();
  const [isBtnDisabled, setIsBtnDisabled] = useState<boolean>(true);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const dispatch = useDispatch();
  const registerData: RegisterDetailsType = useSelector(
    (state: RootState) => state.login.register,
  );

  const goBack = () => {
    navigation.goBack();
  };

  const handleSubmit = async () => {
    const response = await apiRequest(API_CONFIGS_URL.LOGIN, {
      ...registerData,
      otp,
    });
    if (response) {
      dispatch(loginActions.updateAddLoggedInUserDetails(response?.data));

      navigation.replace('restaurantList');
    }
  };
  const onOtpSubmit = (inputOtp: number) => {
    setOtp(inputOtp);
    setIsBtnDisabled(inputOtp.toString().length < 6);
  };

  return (
    <Wrapper>
      <ButtonWrapper>
        <BackButton onPress={goBack} src={backIcon} />
      </ButtonWrapper>
      <TextWrapper>
        <HeadingText>OTP Verification</HeadingText>
        <SubHeadingText>
          Enter the verification code we just sent on your MobileNumber.
        </SubHeadingText>
      </TextWrapper>
      <OtpInput length={6} onOtpSubmit={onOtpSubmit} />
      <CustomButton
        label="Verify"
        onPress={handleSubmit}
        disabled={isBtnDisabled}
      />

      <ResendTextWrapper>
        <SubHeadingText styles={resendStyle}>
          Did'nt recieved the code?
        </SubHeadingText>
        <HeadingText styles={blueText}>Resend</HeadingText>
      </ResendTextWrapper>
    </Wrapper>
  );
};

export default OtpScreen;
