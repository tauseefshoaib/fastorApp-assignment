import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList} from 'react-native';
import styled, {css} from 'styled-components/native';

const Wrapper = styled.View`
  margin-top: 50px;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: 0px 10px;
`;

const Card = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #f7f8f9;
  margin: 5px;
  height: 150px;
  width: 100%;
  border-radius: 15px;
  shadow-color: grey;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.5;
  shadow-radius: 3px;
  elevation: 5;
`;

const Image = styled.Image`
  height: 100%;
  width: 40%;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
`;

const Body = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 10px;
  flex: 1;
  padding: 5px;
  width: 50%;
  height: 100%;
`;

const HeadingText = styled.Text`
  font-size: 18px;
  margin: 2px 0px;
  font-family: Urbanist-SemiBold;
  ${props => props.styles}
`;

const redText = css`
  color: orange;
  font-size: 12px;
`;

const descText = css`
  font-size: 12px;
  color: grey;
`;
const bodyDescText = css`
  font-size: 14px;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;
const Column = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const RowContainer = styled.View`
  flex-direction: row;
`;

const PopularOnesList = ({data}) => {
  const navigation = useNavigation();

  const onPressCard = id => {
    navigation.navigate('restaurantDetails', {id});
  };
  return (
    <Wrapper>
      <HeadingText>Popular Ones</HeadingText>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
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
                <HeadingText
                  styles={
                    descText
                  }>{`${item?.location?.location_locality}, ${item?.location?.city_name} `}</HeadingText>
                <RowContainer>
                  {item?.cuisines.map(c => {
                    return (
                      <HeadingText styles={descText} key={c.cuisine_id}>
                        {`${
                          c.cuisine_name.length > 22
                            ? `${c.cuisine_name.slice(0, 22)}...`
                            : c.cuisine_name
                        }, `}
                      </HeadingText>
                    );
                  })}
                </RowContainer>
                <HeadingText styles={redText}>
                  {'4 Offers Trending'}
                </HeadingText>
                <Row>
                  <Column>
                    <HeadingText styles={bodyDescText}>
                      {`⭑${item?.rating?.restaurant_avg_rating}`}
                    </HeadingText>
                    <HeadingText styles={descText}>Popularity</HeadingText>
                  </Column>
                  <Column>
                    <HeadingText
                      styles={
                        bodyDescText
                      }>{`$ ${item?.avg_cost_for_two}`}</HeadingText>
                    <HeadingText styles={descText}>cost for two</HeadingText>
                  </Column>
                </Row>
              </Body>
            </Card>
          );
        }}
      />
    </Wrapper>
  );
};

export default PopularOnesList;
