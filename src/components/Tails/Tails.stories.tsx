import type { Meta, StoryObj } from '@storybook/react';

import { MemoryRouter } from 'react-router-dom';
import Tails from './Tails';

const meta: Meta<typeof Tails> = {
	component: Tails,
};

export default meta;

type Story = StoryObj<typeof Tails>;

export const DefaultTails: Story = {
	decorators: [
		(Story) => (
			<MemoryRouter>
				<Story />
			</MemoryRouter>
		),
	],
};
