import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { ProfileCard } from './ProfileCard';
import AvatarImg from '../../../../shared/assets/test/example.jpg'

export default {
  title: 'enteties/ProfileCard',
  component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    username: 'admin',
    age: 22,
    country: Country.Russia,
    lastname: 'bkhtn',
    firstname: 'yrsluv',
    city: 'obninsk',
    currency: Currency.USD,
    avatar: AvatarImg,
  },
};

export const IsLoading = Template.bind({});
IsLoading.args = {
  isLoading: true,
};

export const WithError = Template.bind({});
WithError.args = {
  error: ValidateProfileError.NO_DATA,
};
