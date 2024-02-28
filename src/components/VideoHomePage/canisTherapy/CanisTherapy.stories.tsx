import { StoryFn, Meta } from '@storybook/react';
import CanisTherapy from './CanisTherapy';

export default {
  title: 'Components/VideoCanisTherapy',
  component: CanisTherapy,
} as Meta;

const Template: StoryFn = () => <CanisTherapy />;

export const Default = Template.bind({});