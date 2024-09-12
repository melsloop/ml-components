import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import Figure from '../src/components/Figure';
import {
	fullWidthControls,
	radiusControls,
	shadowControls,
	sizeControls,
} from './commonControls';
import Text from '../src/components/Text';

const meta = {
	title: 'Semantic/Figure',
	component: Figure,
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Figure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		fullWidth: false,
		bordered: false,
		caption: 'Caption',
		figureId: 'test',
	},
	argTypes: {
		...sizeControls,
		...shadowControls,
		...radiusControls,
		...fullWidthControls,
	},
	render: function Render(args) {
		return (
			<Figure {...args}>
				<Text
					variant="body1"
					size="md"
				>
					Figurative Content
				</Text>
			</Figure>
		);
	},
};
