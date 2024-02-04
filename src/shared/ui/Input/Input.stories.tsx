import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import { Input } from 'shared/ui/Input/Input';

export default {
  title: 'ui/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Type text',
  value: '142124',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  placeholder: 'Type text',
  value: '142124',
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
