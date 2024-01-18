import React from 'react';
import styled from 'styled-components/native';
import {useNavigation, ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useDispatch, useSelector} from 'react-redux';
import {actions as loginActions} from './loginSlice';
import {RootState} from '../../store/store';
import {RegisterDetailsType} from './loginTypes';
import {apiRequest} from '../../services/api';
import {API_CONFIGS_URL} from '../../services/axiosConfig/constants';
import {HTTP_METHODS} from '../../services/axiosConfig';

const Wrapper = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const HeadingText = styled.Text`
  font-size: 26px;
  line-height: 34px;
  font-family: Urbanist-SemiBold;
`;
const SubHeadingText = styled.Text`
  font-size: 16px;
  font-family: Urbanist-Regular;
  line-height: 24px;
  color: #8391a1;
  margin-top: 5px;
`;

const TextWrapper = styled.View`
  margin: 20px 0px;
`;

type InputFieldType = 'phone';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const registerData: RegisterDetailsType = useSelector(
    (state: RootState) => state.login.register,
  );
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handleInputField = (type: InputFieldType, value: string) => {
    dispatch(loginActions.updateAddRegisterDetails({type, value}));
  };

  const handleSubmit = async () => {
    const response = await apiRequest(
      API_CONFIGS_URL.REGISTER,
      registerData,
      HTTP_METHODS.POST,
    );
    if (response) {
      navigation.navigate('otp');
    }
  };

  return (
    <Wrapper>
      <TextWrapper>
        <HeadingText>Enter Your Mobile Number</HeadingText>
        <SubHeadingText>
          We will send you the 4 digit verification code
        </SubHeadingText>
      </TextWrapper>

      <CustomInput
        placeHolder="Enter Your Mobile Number"
        value={registerData.phone}
        onChangeText={text => handleInputField('phone', text)}
      />
      <CustomButton
        label="Send Code"
        onPress={handleSubmit}
        disabled={registerData.phone.length < 10}
      />
    </Wrapper>
  );
};

export default LoginScreen;
