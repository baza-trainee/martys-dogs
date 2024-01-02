import type { Meta, StoryObj } from '@storybook/react';

import HeroOurTails from './HeroOurTails';

const meta: Meta<typeof HeroOurTails> = {
	component: HeroOurTails,
};

export default meta;

type Story = StoryObj<typeof HeroOurTails>;

export const DefaultHero: Story = {};