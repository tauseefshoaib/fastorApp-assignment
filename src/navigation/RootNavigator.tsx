import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import LoginScreen from '../screens/Login/LoginScreen';
import OtpScreen from '../screens/OTP/OtpScreen';
import ProductListScreen from '../screens/Restaurant/RestaurantListScreen';
import RestaurantDetailsScreen from '../screens/Restaurant/RestaurantDetailsScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="otp"
          component={OtpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="restaurantList"
          component={ProductListScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="restaurantDetails"
          component={RestaurantDetailsScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default RootNavigator;
