import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Spinner from '../src/components/Spinner';

const meta = {
	title: 'Visual/Spinner',
	component: Spinner,
	tags: ['autodocs'],
	args: {
		animation: 'rotation',
		animationTimingFn: 'linear',
		delay: 1000,
	},
	argTypes: {
		animation: {
			options: ['none', 'rotation'],
			control: 'select',
		},
		animationTimingFn: {
			options: ['linear', 'ease-in', 'ease-out', 'ease-in-out'],
			control: 'select',
		},
	},
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: function Render(args) {
		return (
			<Spinner {...args}>
				<img src="/assets/logo/ml-logo-dark.png" />
			</Spinner>
		);
	},
};
