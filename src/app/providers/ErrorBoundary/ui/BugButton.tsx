import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// testing component
export const BugButton = () => {
    // eslint-disable-next-line no-undef
    const [error, setError] = useState<boolean>(false);
    const { t } = useTranslation();
    const throwError = () => setError(true);

    useEffect(() => {
        if (!error) return;
        throw new Error();
    }, [error]);

    return (
        <Button
            onClick={throwError}
        >
            {t('throw error')}
        </Button>
    );
};
