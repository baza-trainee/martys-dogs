import { StoryFn, Meta } from '@storybook/react';
import CanisTheraphy from './CanisTherapy';
import CanisTherapy from './CanisTherapy';

export default {
  title: 'Components/VideoCanisTherapy',
  component: CanisTheraphy,
} as Meta;

const Template: StoryFn = () => <CanisTherapy />;

export const Default = Template.bind({});