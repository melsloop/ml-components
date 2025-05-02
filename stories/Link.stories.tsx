import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Link from '../src/components/Link';
import { Text } from '../src';

const meta = {
	title: 'Text/Link',
	component: Link,
	// tags: ['autodocs'],
	args: {
		href: '#',
		children: 'Link',
	},
	argTypes: {},
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => {
		return (
			<Link {...args}>
				<Text
					variant="body1"
					size="md"
				>
					Link
				</Text>
			</Link>
		);
	},
};
