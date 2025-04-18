import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from '../src/components/Tooltip';
import { Text } from '../src';

const meta = {
	title: 'Popper/Tooltip',
	component: Tooltip,
	// tags: ['autodocs'],
	args: {
		children: 'Tooltip text',
	},
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: ({ tooltipText, opened, children }) =>
		<span>
			This is a text with a tooltip trigger:  <Tooltip tooltipText={tooltipText} opened={opened}>
				<Text variant="body1">
					{children}
				</Text>
			</Tooltip>. Hover it for demo.
		</span>
};
