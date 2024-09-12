import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Container from '../src/components/Container';
import { Button } from '../src';
import { radiusControls, shadowControls } from './commonControls';

const meta = {
	title: 'Container',
	component: Container,
	tags: ['autodocs'],
	args: {
		sticky: false,
		shadow: 'none',
		radius: 'none',
	},
	argTypes: {
		sticky: {
			control: 'boolean',
		},
		stickyPosition: {
			options: ['none', 'top', 'bottom'],
			control: 'select',
		},
		...shadowControls,
		...radiusControls,
	},
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => {
		return (
			<Container {...args}>
				<Button
					variant="contained"
					mode="primary"
					size="xs"
				>
					Button1
				</Button>
				<Button
					variant="contained"
					mode="secondary"
					size="xs"
				>
					Button2
				</Button>
			</Container>
		);
	},
};
