import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeButton } from 'shared/ui/Button/Button';
import { OutlineDark } from 'shared/ui/Button/Button.stories';

export default {
    title: 'ui/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'TEXT',
    theme: AppLinkTheme.PRIMARY,

};
export const Secondary = Template.bind({});
Secondary.args = {
    children: 'TEXT',
    theme: AppLinkTheme.SECONDARY,

};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'TEXT',
    theme: AppLinkTheme.PRIMARY,

};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    children: 'TEXT',
    theme: AppLinkTheme.SECONDARY,

};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
