import { StoryFn, Meta } from '@storybook/react';
import { VideoHomePage, VideoProps } from './Video';
import defaultVideoProps from './PropsData';

export default {
	title: 'Components/Video',
	component: VideoHomePage,
} as Meta;

const Template: StoryFn<VideoProps> = (args) => <VideoHomePage {...args} />;

export const Default = Template.bind({});
Default.args = {
	...defaultVideoProps,
};
