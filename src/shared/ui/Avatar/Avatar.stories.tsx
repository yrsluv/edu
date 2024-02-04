import { ComponentMeta, ComponentStory } from '@storybook/react';
import AvatarImg from './example.jpg';
import { Avatar } from './Avatar';

export default {
  title: 'ui/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: AvatarImg,
  size: 150,
};
export const Small = Template.bind({});
Small.args = {
  src: AvatarImg,
  size: 50,
};
