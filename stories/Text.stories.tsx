import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Text from '../src/components/Text';
import { textVariantControls } from './commonControls';

const meta = {
	title: 'Semantic/Text',
	component: Text,
	tags: ['autodocs'],
	args: {
		children: 'Lorem Ipsum',
		variant: 'body1',
		size: 'md',
		italics: false,
	},
	argTypes: {
		...textVariantControls,
	},
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: function Render({ size, variant, ...args }) {
		return (
			<Text
				size={size}
				variant={variant}
				{...args}
			>
				Lorem Ipsum
			</Text>
		);
	},
};
