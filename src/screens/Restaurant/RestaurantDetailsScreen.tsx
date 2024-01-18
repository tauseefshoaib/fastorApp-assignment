import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Image} from 'react-native';
import {useSelector} from 'react-redux';
import styled, {css} from 'styled-components/native';
import {RootState} from '../../store/store';
import BackButton from '../../components/BackButton';
import backIcon from '../../../assets/icons/back.png';

interface TextProps {
  styles?: string;
}

const Container = styled(View)`
  flex: 1;
`;

const RestaurantImage = styled(Image)`
  height: 60%;
`;

const DetailsContainer = styled(View)`
  padding: 10px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background-color: white;
  height: 100%;
  top: -15px;
`;

const HeadingText = styled.Text<TextProps>`
  font-size: 22px;
  font-family: Urbanist-SemiBold;
  margin-top: 2px;
  ${props => props.styles}
`;

const SubHeadingText = styled.Text<TextProps>`
  font-size: 18px;
  font-family: Urbanist-Regular;
  color: #8391a1;
  margin-top: 20px;
  ${props => props.styles}
`;

const ButtonWrapper = styled.View`
  position: absolute;
  z-index: 1;
  top: 70px;
  left: 20px;
`;

const backBtnStyle = css`
  background-color: transparent;
  border: none;
`;

const addressStyle = css`
  font-size: 18px;
  color: grey;
`;

const redText = css`
  color: orange;
  font-size: 14px;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ratingStyle = css`
  font-size: 16px;
  color: grey;
`;

const RestaurantDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {id} = route?.params;

  const restaurantList = useSelector(
    (state: RootState) => state.restaurant.restaurantListData,
  );

  const restaurantDetails = restaurantList.find(
    item => item.restaurant_id === id,
  );

  if (!restaurantDetails) {
    return null;
  }

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <RestaurantImage source={{uri: restaurantDetails?.images[0]?.url}} />
      <ButtonWrapper>
        <BackButton styles={backBtnStyle} onPress={goBack} src={backIcon} />
      </ButtonWrapper>
      <DetailsContainer>
        <Row>
          <HeadingText>{restaurantDetails?.restaurant_name}</HeadingText>
          <HeadingText
            styles={
              ratingStyle
            }>{`☆ ${restaurantDetails?.rating?.restaurant_avg_rating}`}</HeadingText>
        </Row>
        <HeadingText
          styles={
            addressStyle
          }>{`${restaurantDetails?.location?.location_locality}, ${restaurantDetails?.location?.city_name} `}</HeadingText>
        <HeadingText styles={redText}>{'% 4 Offers Trending'}</HeadingText>
        <SubHeadingText>
          Our delicate vanilla cake swirled with chocolate and filled with mocha
          chocolate chip cream and a layer of dark chocolate ganache
        </SubHeadingText>
      </DetailsContainer>
    </Container>
  );
};

export default RestaurantDetailsScreen;
