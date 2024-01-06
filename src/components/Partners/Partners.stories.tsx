import { StoryFn, Meta } from '@storybook/react';
import {
	PartnersAboutPage,
	defaultPartnersProps,
	PartnersProps,
} from './Partners';
import Icon1 from '../../assets/partners_about/PurinaLogo.svg';
import Icon2 from '../../assets/partners_about/RoyalCanineLogo.svg';

export default {
	title: 'Components/PartnersAboutPage',
	component: PartnersAboutPage,
} as Meta;

const Template: StoryFn<PartnersProps> = (args) => (
	<PartnersAboutPage {...args} />
);

export const Default = Template.bind({});
Default.args = {
	...defaultPartnersProps,
};

export const CustomPartners = Template.bind({});
CustomPartners.args = {
	title: 'Список логотипів',
	icons: [
		{ src: Icon2, alt: 'Роял Канін' },
		{ src: Icon1, alt: 'Пуріна' },
	],
};
