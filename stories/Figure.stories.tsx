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
		spacing: 'md',
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
	render: ({ spacing, fullWidth, size, radius, caption, bordered }) => {
		return (
			<Figure
				spacing={spacing}
				size={size}
				fullWidth={fullWidth}
				caption={caption}
				bordered={bordered}
				radius={radius}
			>
				<Text variant="body1">Figurative Content</Text>
			</Figure>
		);
	},
};
