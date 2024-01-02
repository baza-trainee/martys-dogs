import type { Meta, StoryObj } from '@storybook/react';

import ErrorBlock from './ErrorBlock';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof ErrorBlock> = {
	component: ErrorBlock,
};

export default meta;

type Story = StoryObj<typeof ErrorBlock>;

export const DefaultErrorBlock: Story = {
	decorators: [
		(Story) => (
			<MemoryRouter>
				<Story />
			</MemoryRouter>
		),
	],
};
