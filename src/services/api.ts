import {Alert} from 'react-native';
import {HTTP_METHODS, getRequest, postRequest} from './axiosConfig/index';

export const apiRequest = async (
  url: string,
  req?: object,
  type: string = 'post',
) => {
  let response: any;
  switch (type) {
    case HTTP_METHODS.POST:
      response = await postRequest(url, req);
      break;
    case HTTP_METHODS.GET:
      response = await getRequest(url);
      break;
    default:
      throw new Error('Invalid callType');
  }
  if (response?.data) {
    console.log('response=>', response?.data);
    return response?.data;
  } else {
    console.error(response);
    Alert.alert(response?.data?.error_message || 'Something Went Wrong');
  }
};
