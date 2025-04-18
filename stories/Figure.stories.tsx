import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Figure from '../src/components/Figure';
import {
	fullWidthControls,
	radiusControls,
	shadowControls,
	sizeControls,
} from './helpers/commonControls';
import Text from '../src/components/Text';

const meta = {
	title: 'Text/Figure',
	component: Figure,
	// tags: ['autodocs'],
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
} satisfies Meta<typeof Figure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => {
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
