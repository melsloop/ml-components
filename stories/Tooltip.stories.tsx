import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from '../src/components/Tooltip';
import { Container, Text } from '../src';

const meta = {
	title: 'Popper/Tooltip',
	component: Tooltip,
	// tags: ['autodocs'],
	args: {
		children: 'Tooltip trigger',
		tooltipText: 'Tooltip text',
	},
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: ({ tooltipText, side, opened, children }) => (
		<Container
			alignItems="center"
			justifyContent="center"
			minHeight="500px"
		>
			<Tooltip
				tooltipText={tooltipText}
				opened={opened}
				side={side}
			>
				<Text variant="body2">{children}</Text>
			</Tooltip>
		</Container>
	),
};
