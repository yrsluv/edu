import { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKeys } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
    [name in StateSchemaKeys]?: Reducer;
};

interface DynamicModelLoaderProps {
    children: ReactNode;
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}
export const DynamicModelLoader: FC<DynamicModelLoaderProps> = (props: DynamicModelLoaderProps) => {
    const { children, reducers, removeAfterUnmount } = props;
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKeys, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });

        return () => {
            if (!removeAfterUnmount) return;
            Object.entries(reducers).forEach(([name]) => {
                store.reducerManager.remove(name as StateSchemaKeys);
                dispatch({ type: `@DESTROY ${name} reducer` });
            });
        };
        // only need when component first render
        // eslint-disable-next-line
    }, []);

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
};
