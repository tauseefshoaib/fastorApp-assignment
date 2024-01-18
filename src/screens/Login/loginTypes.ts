export interface LoginType {
  register: RegisterDetailsType;
  loggedInUserDetails: LoggedInUserDetailsType | undefined;
}

export type RegisterDetailsType = {
  phone: string;
  dial_code: string;
};

export interface FieldNameValuePayloadTypes {
  value: string | number;
  type: string;
}

export interface LoggedInUserDetailsType {
  user_id: string;
  user_name: string;
  user_gender: string;
  user_email: string;
  dial_code: string;
  user_mobile: string;
  member_since: string;
  email_verified: boolean;
  mobile_verified: boolean;
  user_username: string | null;
  password: string;
  last_password_update: string;
  user_source: string;
  user_image: string;
  dob: string | null;
  first_order: boolean;
  refer_code: string;
  favorite: null | string;
  food_tags: null | string;
  workmode: null | string;
  country_id: null | string;
  last_known_location: Location[];
  token: string;
  refresh_token: string;
  is_new_user: boolean;
}

interface Location {
  id: number;
  user_name: string;
  user_mobile: string;
  address: string;
  address2: string;
  type: string;
  pincode: string;
  city_name: string;
  state_name: string;
  country_name: string;
}
