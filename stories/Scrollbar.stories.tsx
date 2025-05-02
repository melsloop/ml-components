import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Scrollbar from '../src/components/Scrollbar';

const meta = {
	title: 'Container/Scrollbar',
	component: Scrollbar,
	// tags: ['autodocs'],
	args: {
		textDirection: 'ltr',
		height: 400,
	},
	argTypes: {
		textDirection: {
			options: ['ltr', 'rtl'],
			control: 'select',
		},
		height: {
			control: 'number',
		},
	},
} satisfies Meta<typeof Scrollbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => {
		return (
			<Scrollbar {...args}>
				<div style={{ height: '1000px' }}>Content</div>
			</Scrollbar>
		);
	},
};
