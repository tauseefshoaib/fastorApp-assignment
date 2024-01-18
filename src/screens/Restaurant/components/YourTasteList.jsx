import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0px;
`;

const Card = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f7f8f9;
  margin: 5px;
  width: 120px;
  height: 200px;
  border-radius: 15px;
  shadow-color: grey;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.5;
  shadow-radius: 3px;
  elevation: 5;
`;

const Image = styled.Image`
  height: 120px;
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const Body = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  padding: 5px;
`;

const HeadingText = styled.Text`
  font-size: 16px;
  font-family: Urbanist-SemiBold;
  ${props => props.styles}
`;

const SubHeadingText = styled.Text`
  font-size: 12px;
  font-family: Urbanist-Regular;
  color: #8391a1;
  margin-top: 5px;
  ${props => props.styles}
`;

const Heading = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const YourTasteList = ({data}) => {
  const navigation = useNavigation();
  const onPressCard = id => {
    navigation.navigate('restaurantDetails', {id});
  };
  return (
    <Wrapper>
      <Heading>
        <HeadingText>Your Taste</HeadingText>
        <SubHeadingText>see all</SubHeadingText>
      </Heading>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        horizontal={true}
        keyExtractor={item => item?.restaurant_id}
        renderItem={({item}) => {
          return (
            <Card onPress={() => onPressCard(item.restaurant_id)}>
              <Image source={{uri: item?.images[0]?.url}} />
              <Body>
                <HeadingText>
                  {item?.restaurant_name.length > 12
                    ? item?.restaurant_name.slice(0, 12)
                    : item?.restaurant_name}
                </HeadingText>
                <SubHeadingText>{`${item?.location?.location_locality}, ${item?.location?.city_name} `}</SubHeadingText>
              </Body>
            </Card>
          );
        }}
      />
    </Wrapper>
  );
};

export default YourTasteList;
