import { StoryFn, Meta } from '@storybook/react';
import Partners, { PartnersProps } from "./Partners";
/*import Icon1 from '../../assets/partners_about/PurinaLogo.svg';
import Icon2 from '../../assets/partners_about/RoyalCanineLogo.svg';*/

export default {
  title: 'Components/PartnersAboutPage',
  component: Partners,
} as Meta;

const Template: StoryFn<PartnersProps> = (args: PartnersProps) => <Partners {...args} />;

export const Default = Template.bind({});
