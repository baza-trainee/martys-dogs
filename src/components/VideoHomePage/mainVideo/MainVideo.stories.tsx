import { StoryFn, Meta } from '@storybook/react';
import MainVideo from './MainVideo'

export default {
  title: 'Components/VideoMain',
  component: MainVideo,
} as Meta;

const Template: StoryFn = () => <MainVideo />;

export const Default = Template.bind({});