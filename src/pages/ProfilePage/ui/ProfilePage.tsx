import {
  DynamicModelLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModelLoader/DynamicModelLoader';
import {
  fetchProfileData,
  getProfileError,
  getProfileIsLoading,
  getProfileReadOnly,
  ProfileCard,
  profileReducer,
} from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { profileAction } from 'entities/Profile/model/slice/profileSlice';
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm';
import { Currency } from 'entities/Currency';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { Country } from 'entities/Country';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const dispatch = useAppDispatch();

  const form = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadOnly);

  const onChangeFirstName = useCallback(
    (value?: string) => {
      dispatch(profileAction.setProfileData({ firstname: value || '' }));
    },
    [dispatch],
  );

  const onChangeLastName = useCallback(
    (value?: string) => {
      dispatch(profileAction.setProfileData({ lastname: value || '' }));
    },
    [dispatch],
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileAction.setProfileData({ city: value || '' }));
    },
    [dispatch],
  );

  const onChangeAge = useCallback(
    (value?: string | number) => {
      if (!/^\d+$/.test(String(value))) return;
      dispatch(profileAction.setProfileData({ age: Number(value || 0) }));
    },
    [dispatch],
  );

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileAction.setProfileData({ username: value || '' }));
    },
    [dispatch],
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileAction.setProfileData({ avatar: value || '' }));
    },
    [dispatch],
  );

  const onChangeCurrency = useCallback(
    (currency?: Currency) => {
      dispatch(profileAction.setProfileData({ currency }));
    },
    [dispatch],
  );

  const onChangeCountry = useCallback(
    (country?: Country) => {
      dispatch(profileAction.setProfileData({ country }));
    },
    [dispatch],
  );

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModelLoader reducers={reducers} removeAfterUnmount>
      <ProfilePageHeader />
      <ProfileCard
        data={form}
        error={error}
        isLoading={isLoading}
        readonly={readonly}
        onChangeFirstName={onChangeFirstName}
        onChangeLastName={onChangeLastName}
        onChangeAge={onChangeAge}
        onChangeCity={onChangeCity}
        onChangeAvatar={onChangeAvatar}
        onChangeUsername={onChangeUsername}
        onChangeCurrency={onChangeCurrency}
        onChangeCountry={onChangeCountry}
      />
    </DynamicModelLoader>
  );
};

export default ProfilePage;
