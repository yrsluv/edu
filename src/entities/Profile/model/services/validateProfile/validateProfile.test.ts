import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfile } from './validateProfile';
import { ValidateProfileError } from '../../types/profile';

const data = {
  username: 'admin',
  age: 22,
  country: Country.Russia,
  lastname: 'bkhtn',
  firstname: 'yrsluv',
  city: 'obninsk',
  currency: Currency.USD,
};

describe('validateProfile.test', () => {
  test('success', async () => {
    const result = validateProfile(data);

    expect(result).toEqual([]);
  });

  test('without firstname | lastname', async () => {
    const result = validateProfile({ ...data, firstname: '', lastname: '' });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('incorrect age', async () => {
    const result = validateProfile({ ...data, age: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_AGE]);
  });

  test('incorrect country', async () => {
    const result = validateProfile({ ...data, country: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_COUNTRY]);
  });

  test('incorrect country', async () => {
    const result = validateProfile({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_USER_AGE,
      ValidateProfileError.INCORRECT_USER_COUNTRY,
    ]);
  });
});
