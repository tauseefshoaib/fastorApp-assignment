export interface RestaurantType {
  restaurantListData: RestaurantListType[];
}

export interface RestaurantListType {
  restaurant_id: string;
  lead_id: string;
  restaurant_name: string;
  avg_cost_for_two: number;
  avg_order_cost: number | null;
  avg_daily_order_count: number | null;
  rating: {
    restaurant_avg_rating: number;
    count: number;
    all: {
      '1': number;
      '2': number;
      '3': number;
      '4': number;
      '5': number;
    };
  };
  currency: {
    symbol: string;
  };
  table_count: number;
  does_bookings: boolean;
  location_id: string;
  e_type_id: string;
  restaurant_uuid: string;
  image: string | null;
  is_tnc_agree: boolean | null;
  restaurant_mode: 'DINE_IN' | 'NON_DINE_IN';
  opens_at: string;
  closes_at: string;
  qr_active: boolean;
  address_complete: string | null;
  is_close: boolean;
  is_close_cafeteria: boolean;
  status: 'OPEN' | 'CLOSED';
  merchant_payment_methods: string[];
  social_profiles: any | null;
  logo: string | null;
  next_closes_at: string | null;
  next_opens_at: string | null;
  free_trial_eligibility: boolean;
  points: string;
  active: boolean;
  free_tier_expire_at: string | null;
  refer_responded: boolean;
  active_plan: 'FREE' | 'PREMIUM';
  free_trial_expired: boolean;
  created_at: string;
  restaurant_code: string;
  noti_set: string;
  activated_at: string | null;
  active_plan_id: string;
  type_id: string | null;
  m_id: number;
  store_id: string | null;
  location: {
    location_id: number;
    location_address: string;
    location_address_2: string;
    location_zip_code: number;
    location_lat: number;
    location_long: number;
    location_locality: string;
    city_name: string;
    state_name: string;
    city_id: string | null;
    state_id: string;
    update_count: string;
  };
  restaurant_type: string | null;
  cuisines: {
    cuisine_id: number;
    cuisine_name: string;
    restaurant_id: string;
    added_at: string;
    is_visible: boolean;
    is_deleted: boolean;
    color: string;
    text_color: string;
    image: string | null;
    counter_id: string | null;
  }[];
  images: {
    url: string;
  }[];
  thumbnail_image: string | null;
  cover_image: string | null;
  small_image: string | null;
  large_image: string | null;
}
