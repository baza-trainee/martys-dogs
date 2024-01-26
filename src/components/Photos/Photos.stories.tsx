import type { Meta, StoryObj } from '@storybook/react';

import { MemoryRouter } from 'react-router-dom';
import Photos from './Photos';

const meta: Meta<typeof Photos> = {
	component: Photos,
};

export default meta;

type Story = StoryObj<typeof Photos>;

export const DefaultPhotos: Story = {
	decorators: [
		(Story) => (
			<MemoryRouter>
				<Story />
			</MemoryRouter>
		),
	],
};
