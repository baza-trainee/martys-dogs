import type { Meta, StoryObj } from '@storybook/react';

import Tail from './Tail';

const meta: Meta<typeof Tail> = {
	component: Tail,
};

export default meta;

type Story = StoryObj<typeof Tail>;

export const DefaultTail: Story = {
	args: {
		"id": 1,
		"name": "Бренда",
		"ready_for_adoption": false,
		"gender": "дівчинка",
		"age": "4 роки",
		"sterilization": true,
		"vaccination_parasite_treatment": true,
		"size": "середній",
		"description": " Бренду знають усі. Це хвостатий символ Міста Добра. Ідеальнішу собаку годі шукати. Дружелюбна та вірна. Бренда каністерапевтка і добре відчуває, коли когось болить душа. Зцілювати дітей та дорослих – місія з якою наша чотирилапа подруга справляється на краще всіх. Любимо всім серцем",
		"photo": {
			"id": "4_za0fb262c29a79a118dc20518_f1153db8b5a474abd_d20240104_m143100_c005_v0501013_t0033_u01704378660619",
			"name": "Бренда.webp",
			"url": "https://image-bucket-234324234.s3.us-east-005.backblazeb2.com/Бренда.webp",
			"category": "image"
		}
	},
};
