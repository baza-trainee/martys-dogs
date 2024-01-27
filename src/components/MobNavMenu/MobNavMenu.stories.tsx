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

type MobNavMenuStory = Story;

const Template: MobNavMenuStory = (args) => (
  <I18nextProvider i18n={i18n}>
    <BrowserRouter>
      <MobNavMenu {...args} currentLanguage="ua" changeLanguage={() => console.log("Language changed")} />
    </BrowserRouter>
  </I18nextProvider>
);

export const Default = Template.bind({});