import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { getProfileReadOnly, updateProfileData } from 'entities/Profile';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { profileAction } from 'entities/Profile/model/slice/profileSlice';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation();

  const dispath = useAppDispatch();

  const onEdit = useCallback(() => {
    dispath(profileAction.setReadOnly(false));
  }, [dispath]);

  const onCancel = useCallback(() => {
    dispath(profileAction.cancelEdit());
  }, [dispath]);

  const onSave = useCallback(() => {
    dispath(updateProfileData());
  }, [dispath]);

  const readOnly = useSelector(getProfileReadOnly);
  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      {readOnly ? (
        <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE} onClick={onEdit}>
          {t('Редактировать')}
        </Button>
      ) : (
        <>
          <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE_RED} onClick={onCancel}>
            {t('Отменить')}
          </Button>
          <Button className={cls.saveBtn} theme={ButtonTheme.OUTLINE} onClick={onSave}>
            {t('Сохранить')}
          </Button>
        </>
      )}
    </div>
  );
};
