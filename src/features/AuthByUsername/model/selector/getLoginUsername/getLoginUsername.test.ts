import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('should return boolean', () => {
        const state: DeepPartial<StateSchema> = {
            loginFrom: {
                username: 'login',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('login');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
