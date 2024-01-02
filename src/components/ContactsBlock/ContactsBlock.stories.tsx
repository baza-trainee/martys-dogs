import type { Meta, StoryObj } from '@storybook/react';

import ContactsBlock from './ContactsBlock';

const meta: Meta<typeof ContactsBlock> = {
	component: ContactsBlock,
};

export default meta;

type Story = StoryObj<typeof ContactsBlock>;

export const DefaultContacts: Story = {};