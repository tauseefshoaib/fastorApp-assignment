type ApiConfigs = {
  REGISTER: string;
  LOGIN: string;
  FETCH_RESTAURANT: string;
};

export const API_CONFIGS_URL: ApiConfigs = {
  REGISTER: '/pwa/user/register',
  LOGIN: '/pwa/user/login',
  FETCH_RESTAURANT: '/m/restaurant?city_id=118',
};
