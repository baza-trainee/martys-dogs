import type { Meta, Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';
import MobNavMenu from './MobNavMenu';

const meta: Meta = {
  title: 'Components/MobNavMenu',
  component: MobNavMenu
};

export default meta;

type FooterStory = Story;

const Template: FooterStory = (args) => (
  <I18nextProvider i18n={i18n}>
    <BrowserRouter>
      <MobNavMenu {...args} />
    </BrowserRouter>
  </I18nextProvider>
);

export const Default = Template.bind({});