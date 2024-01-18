import React from 'react';
import {useEffect} from 'react';
import {apiRequest} from '../../services/api';
import {API_CONFIGS_URL} from '../../services/axiosConfig/constants';
import {HTTP_METHODS} from '../../services/axiosConfig';
import {useDispatch, useSelector} from 'react-redux';
import {actions as restaurantActions} from './restaurantSlice';
import {RootState} from '../../store/store';
import {RestaurantListType} from './restaurantTypes';
import styled, {css} from 'styled-components/native';
import Namecard from './components/Namecard';
import IconCard from './components/IconCard';
import walletIcon from '../../../assets/icons/wallet.png';
import discountIcon from '../../../assets/icons/discount.png';
import YourTasteList from './components/YourTasteList';
import {LoggedInUserDetailsType} from '../Login/loginTypes';
import PopularOnesList from './components/PopularOnesList';

interface TextProps {
  styles?: string;
}

const Wrapper = styled.SafeAreaView`
  background-color: white;
  flex: 1;
`;

const Header = styled.View`
  position: absolute;
  z-index: 1;
  top: 40px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px 5px;
  background-color: white;
  shadow-color: grey;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.5;
  shadow-radius: 4px;
  elevation: 8;
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.2);
`;

const HeadingText = styled.Text<TextProps>`
  font-size: 26px;
  line-height: 34px;
  font-family: Urbanist-SemiBold;
  ${props => props.styles}
`;

const SubHeadingText = styled.Text<TextProps>`
  font-size: 16px;
  font-family: Urbanist-Regular;
  line-height: 24px;
  color: #8391a1;
  margin-top: 5px;
  ${props => props.styles}
`;

const BodyWrapper = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px 10px;
  margin: 50px 0px;
`;

const RowWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const headerSubheading = css`
  font-size: 16px;
  margin: 0px;
  line-height: 20px;
`;
const headerHeading = css`
  font-size: 16px;
  margin: 0px;
  line-height: 20px;
`;

const VerticalList = styled.View`
  flex: 1;
  width: 100%;
`;

const ProductListScreen: React.FC = () => {
  const dispatch = useDispatch();

  const restaurantListData: RestaurantListType[] = useSelector(
    (state: RootState) => state.restaurant.restaurantListData,
  );
  const loggedInUserData: LoggedInUserDetailsType = useSelector(
    (state: RootState) => state.login.loggedInUserDetails,
  );

  const fetchProductList = async () => {
    const response = await apiRequest(
      API_CONFIGS_URL.FETCH_RESTAURANT,
      {},
      HTTP_METHODS.GET,
    );
    if (response) {
      dispatch(restaurantActions.updateAddRestaurantListData(response));
    }
  };

  useEffect(() => {
    fetchProductList();
  }, []);

  return (
    <Wrapper>
      <Header>
        <SubHeadingText styles={headerHeading}>Pre Order From</SubHeadingText>
        <HeadingText styles={headerSubheading}>cannaught Place</HeadingText>
      </Header>

      <BodyWrapper>
        {loggedInUserData && (
          <RowWrapper>
            <Namecard name={loggedInUserData?.user_name} />
            <IconCard src={discountIcon} title="Offers" />
            <IconCard src={walletIcon} title="Wallet" />
          </RowWrapper>
        )}

        {restaurantListData && <YourTasteList data={restaurantListData} />}
      </BodyWrapper>
      <VerticalList>
        {restaurantListData && <PopularOnesList data={restaurantListData} />}
      </VerticalList>
    </Wrapper>
  );
};

export default ProductListScreen;
