import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModelLoader, ReducersList } from 'shared/lib/components/DynamicModelLoader/DynamicModelLoader';
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);
    return (
        <DynamicModelLoader reducers={reducers} removeAfterUnmount>
            <ProfileCard />
        </DynamicModelLoader>
    );
};

export default ProfilePage;
