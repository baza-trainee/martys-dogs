import type { Meta, StoryObj } from '@storybook/react';

import Tail from './Tail';
import img1 from '../../assets/card-1.webp';

const meta: Meta<typeof Tail> = {
	component: Tail,
};

export default meta;

type Story = StoryObj<typeof Tail>;

export const DefaultTail: Story = {
	args: {
		img: img1,
		ready: true,
		name: 'Мухтар',
		age: '2 роки',
		gender: 'Хлопчик',
		description:
			'Мухтар потрапив до нас у дуже поганому стані: знесилений, лисий та весь у ранах. Ми довго боролися за життя цього красеня і все вийшло. Тепер Мухтар справжній хвостатий захисник, а ще дуже розумний. Наші діти обожнюють цього пухнастого друга і мріють щоб Мухтар опинився у чудесному домі поруч з люблячими господарями.',
		size: 'Великий',
	},
};
