import ProfileInfo from './ProfileInfo';
import type { StoryObj, Meta } from '@storybook/react';

type Story = StoryObj<typeof ProfileInfo>;

const meta: Meta<typeof ProfileInfo> = {
  title: 'profile-info',
  component: ProfileInfo,
};

export const ProfileInfoStory: Story = {};

export default meta;
