import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Paragraph from '../src/components/Paragraph/Paragraph';
import { Text } from '../src';

const meta = {
	title: 'Text/Paragraph',
	component: Paragraph,
	// tags: ['autodocs'],
	args: {
		children:
			'fdsjkfjdsaklfjd sakljfd lksjfklds jfklds jfkld sajklf dsjaklffdsjkfjdsaklfjd sakljfd lksjfklds jfklds jfkld sajklf dsjaklffdsjkfjdsaklfjd sakljfd lksjfklds jfklds jfkld sajklf dsjaklffdsjkfjdsaklfjd sakljfd lksjfklds jfklds jfkld sajklf dsjaklf',
	},
	argTypes: {
		children: {
			control: 'text',
			description: 'Text',
		},
	},
} satisfies Meta<typeof Paragraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: ({ children }) => (
		<Paragraph>
			<Text variant="body2">{children || ''}</Text>
		</Paragraph>
	),
};
