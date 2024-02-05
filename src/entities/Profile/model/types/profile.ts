import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export enum ValidateProfileError {
  INCORRECT_USER_DATA = 'incorrect_user_data',
  INCORRECT_USER_AGE = 'incorrect_user_age',
  INCORRECT_USER_COUNTRY = 'incorrect_user_country',
  NO_DATA = 'no_data',
  SERVER_ERROR = 'server_error'
}

export interface Profile {
  firstname?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateErrors?: ValidateProfileError[];
}
