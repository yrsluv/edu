import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecarator/StoreDecorator';
import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
    StoreDecorator({
        loginFrom: { username: '123', password: '123' },
    }),
];
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
PrimaryDark.decorators = [
    StoreDecorator({
        loginFrom: { username: '123', password: '123' },
    }),
];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [
    StoreDecorator({
        loginFrom: { username: '123', password: '123', error: 'withError' },
    }),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
    StoreDecorator({
        loginFrom: { isLoading: true },
    }),
];
