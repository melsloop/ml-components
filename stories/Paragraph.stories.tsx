import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Paragraph from '../src/components/Paragraph/Paragraph';

const meta = {
	title: 'Text/Paragraph',
	component: Paragraph,
	tags: ['autodocs'],
	args: {},
	argTypes: {},
} satisfies Meta<typeof Paragraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: function Render(args) {
		return <Paragraph {...args}>Some content</Paragraph>;
	},
};
